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
//const io = socketIo(server);
let rooms = {}; // Store the current song and timestamp for each room

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join-room', ({ roomId }) => {
    socket.join(roomId);
    console.log(`User  joined room: ${roomId}`);

    // Sync new user with current room state
    if (rooms[roomId]) {
      socket.emit('play-song', rooms[roomId]);
    }
    socket.to(roomId).emit('user-joined', { message: 'A new user has joined the room.' });
  });

  socket.on('play-song', ({ roomId, song, timestamp }) => {
    rooms[roomId] = { song, timestamp };
    io.in(roomId).emit('play-song', { song, timestamp });
  });

  socket.on('pause-song', ({ roomId }) => {
    io.in(roomId).emit('pause-song');
  });

  socket.on('next-song', ({ roomId }) => {
    io.in(roomId).emit('next-song');
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    // Optionally, check if the room is empty and remove it
    for (let roomId in rooms) {
      if (io.sockets.adapter.rooms[roomId] && io.sockets.adapter.rooms[roomId].length === 0) {
        delete rooms[roomId];
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
app.get('/socket.io/socket.io.js', (req, res) => {
    res.sendFile(require.resolve('socket.io/client-dist/socket.io.js'));
});
app.use(express.static(path.join(__dirname, 'public')));

// Serve the favicon
app.get('/favicon.ico', (req, res) => res.status(204));