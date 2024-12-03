// script.js
document.addEventListener('DOMContentLoaded', () => {
const socket = io('http://localhost:3000'); // Connect to the server
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const joinRoomBtn = document.getElementById('join-room-btn');
const roomIdInput = document.getElementById('room-id');
const songImage = document.getElementById('song-image');
// Variable to hold the current room ID
let currentRoom = null;

// Array of songs
const songs = [
    { title: "Song 1", url: "music.mp3", image: "img1.jpeg"},
    { title: "Song 2", url: "song2.mp3", image: "thumbnail.jpg"},
    { title: "Song 3", url: "song3.mp3", image: "Rangule.png"},
    { title: "Song 4", url: "song4.mp3", image: "download.jpeg"},
    { title: "Song 5", url: "song5.mp3", image: "1.jpg"},
   
];

let currentSongIndex = 0;

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
    if (currentRoom) {
        socket.emit('play-song', { roomId: currentRoom, songIndex: currentSongIndex });
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

// Next song logic
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Cycle through songs
    if (currentRoom) {
        socket.emit('next-song', { roomId: currentRoom, songIndex: currentSongIndex });
    }
    changeSong(currentSongIndex);
});

// Function to change the song
function changeSong(index) {
    console.log(audioSource);
    songImage.src = songs[index].image; // Check if this is null
    audioSource.src = songs[index].url; // Update the audio source
    audioPlayer.load(); // Load the new song
    audioPlayer.play(); // Play the new song
}
// Listen for synchronization events from the server
socket.on('play-song', (data) => {
    currentSongIndex = data.songIndex; // Update the current song index
    changeSong(currentSongIndex); // Change the song
});

socket.on('pause-song', () => {
    audioPlayer.pause();
});

socket.on('next-song', (data) => {
    currentSongIndex = data.songIndex; // Update the current song index
    changeSong(currentSongIndex); // Change the song
});
});
const roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room IDconst roomId = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random room ID
