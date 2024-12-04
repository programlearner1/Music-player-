const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://imaginative-malabi-f9a327.netlify.app", // Your Netlify URL
    methods: ["GET", "POST"],
    credentials: true
  }
});

let rooms = {}; // Store the current song and timestamp for each room

// Example default song
const defaultSong = {
  title: "Default Song Title",
  url: "https://example.com/default-song.mp3", // URL of the default song
  timestamp: 0 // Start from the beginning
};

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join-room', ({ roomId }) => {
    socket.join(roomId);
    console.log(`User  joined room: ${roomId}`);

    // If the room does not exist, initialize it with the default song
    if (!rooms[roomId]) {
      rooms[roomId] = {
        song: { ...defaultSong },
        owner: socket.id, // Set the first user as the owner
        users: [socket.id] // Keep track of users in the room
      };
    } else {
      rooms[roomId].users.push(socket.id); // Add user to the existing room
    }

    // Sync new user with current room state
    socket.emit('play-song', rooms[roomId].song);
    socket.to(roomId).emit('user-joined', { message: 'A new user has joined the room.' });
  });

  socket.on('play-song', ({ roomId, song, timestamp }) => {
    if (rooms[roomId] && rooms[roomId].owner === socket.id) { // Check if the sender is the owner
      rooms[roomId].song = { song, timestamp }; // Update the song
      io.in(roomId).emit('play-song', { song, timestamp });
    }
  });
  socket.on('play-song', (data) => {
    // Assuming you have logic to determine the current song index
    if (rooms[data.roomId]) {
        const currentSongIndex = rooms[data.roomId].currentSongIndex; // Example logic to get the index
        io.to(data.roomId).emit('play-song', { songIndex: currentSongIndex });
    }
});

  socket.on('pause-song', ({ roomId }) => {
    if (rooms[roomId] && rooms[roomId].owner === socket.id) { // Check if the sender is the owner
      io.in(roomId).emit('pause-song');
    }
  });

  socket.on('next-song', ({ roomId }) => {
    if (rooms[roomId] && rooms[roomId].owner === socket.id) { // Check if the sender is the owner
      io.in(roomId).emit('next-song');
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    // Optionally, check if the room is empty and remove it
    for (let roomId in rooms) {
      rooms[roomId].users = rooms[roomId].users.filter(userId => userId !== socket.id); // Remove user from the room
      if (rooms[roomId].users.length === 0) {
        delete rooms[roomId]; // Delete the room if empty
      }
    }
  });
});

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the Socket.IO client library
app.get('/socket.io/socket.io.js', (req, res) => {
  res.sendFile(require.resolve('socket.io/client-dist/socket.io.js'));
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).send('Resource not found');
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the favicon
app.get('/favicon.ico', (req, res) => res.status(204));