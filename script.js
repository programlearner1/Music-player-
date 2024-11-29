// script.js
const socket = io('http://localhost:3000'); // Connect to the server
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const joinRoomBtn = document.getElementById('join-room-btn');
const roomIdInput = document.getElementById('room-id');

// Variable to hold the current room ID
let currentRoom = null;

// Join a room
joinRoomBtn.addEventListener('click', () => {
  const roomId = roomIdInput.value;
  if (roomId) {
    socket.emit('join-room', { roomId });
    currentRoom = roomId;
    alert(`Joined room: ${roomId}`);
  }
});

// Play button logic
playBtn.addEventListener('click', () => {
  const currentTime = audioPlayer.currentTime;
  console.log("playing")
  if (currentRoom) {
    socket.emit('play-song', { roomId: currentRoom, timestamp: currentTime });
  }
  audioPlayer.play();
});

// Pause button logic
pauseBtn.addEventListener('click', () => {
  if (currentRoom) {
    socket.emit('pause-song', { roomId: currentRoom });
  }
  audioPlayer.pause();
});

// Next song logic (for simplicity, just restart the current song)
nextBtn.addEventListener('click', () => {
  if (currentRoom) {
    socket.emit('next-song', { roomId: currentRoom });
  }
  audioPlayer.currentTime = 0;
  audioPlayer.play();
});

// Listen for synchronization events from the server
socket.on('play-song', (data) => {
  audioPlayer.currentTime = data.timestamp;
  audioPlayer.play();
});

socket.on('pause-song', () => {
  audioPlayer.pause();
});

socket.on('next-song', () => {
  audioPlayer.currentTime = 0;
  audioPlayer.play();
});
const roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room ID
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/api/some-endpoint', (req, res) => {
  res.send('Hello World');
});*/
app.use((req, res, next) => {
  res.status(404).send('Sorry, that resource was not found.');
});