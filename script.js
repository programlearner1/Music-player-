const socket = io(); // Connect to the Socket.IO server

// Function to join a room
function joinRoom() {
    const roomId = document.getElementById('roomId').value;
    socket.emit('join-room', { roomId });
}

// Listen for 'play-song' event from the server
socket.on('play-song', ({ song, timestamp }) => {
    console.log(`Now playing: ${song} at ${timestamp} seconds`);
    // Here you can add logic to play the song in your music player
});

// Listen for 'user-joined' event from the server
socket.on('user-joined', ({ message }) => {
    console.log(message);
});

// Function to play a song
function playSong() {
    const roomId = document.getElementById('roomId').value;
    const song = document.getElementById('song').value;
    const timestamp = 0; // You can set a specific timestamp if needed
    socket.emit('play-song', { roomId, song, timestamp });
}

// Function to pause the song
function pauseSong() {
    const roomId = document.getElementById('roomId').value;
    socket.emit('pause-song', { roomId });
}

// Function to skip to the next song
function nextSong() {
    const roomId = document.getElementById('roomId').value;
    socket.emit('next-song', { roomId });
}