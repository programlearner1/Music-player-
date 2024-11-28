const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let rooms = {}; // Store the current song and timestamp for each room

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join-room', ({ roomId }) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);

    // Sync new user with current room state
    if (rooms[roomId]) {
      socket.emit('play-song', rooms[roomId]);
    }
  });

  socket.on('play-song', ({ roomId, timestamp }) => {
    rooms[roomId] = { timestamp };
    io.in(roomId).emit('play-song', { timestamp });
  });

  socket.on('pause-song', ({ roomId }) => {
    io.in(roomId).emit('pause-song');
  });

  socket.on('next-song', ({ roomId }) => {
    io.in(roomId).emit('next-song');
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:3000');
});
