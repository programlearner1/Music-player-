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
    const body = document.body; // Reference to the body element

    // Variable to hold the current room ID
    let currentRoom = null;

    // Array of songs
    const songs = [
        { title: "Bujji thalli", artist:"Javed Ali and Devi Sri Prasad", url: "music.mp3", image: "img1.jpeg" },
        { title: "Aa bandham abadhama", artist:"Vaishnavi Kovvuri", url: "song2.mp3", image: "thumbnail.jpg" },
        { title: "Hey rangule", artist:" Anurag Kulkarni", url: "song3.mp3", image: "ranguleimg.jpg" },
        { title: "Rayani kadhale", artist:" M.S Krsna and Meha Agarwal", url: "song4.mp3", image: "download.jpeg" },
        { title: "Manasilaayo", artist:"Anirudh Ravichander", url: "song5.mp3", image: "1.jpg" },
    ];

    let currentSongIndex = 0;
    changeSong(currentSongIndex);

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
        if (index < 0 || index >= songs.length) {
            console.error('Invalid song index:', index);
            return;
        } 
        if (!songs) {
            console.error('Song is undefined');
            return;
        }
        const image = song.image; 
        console.log('Received song data:', song);
        changeSong(song);
        songImage.src = songs[index].image; // Update the song image
        audioSource.src = songs[index].url; // Update the audio source
        body.style.backgroundImage = `url(${songs[index].image})`; // Change the body background
        audioPlayer.load(); // Load the new song
        audioPlayer.play(); // Play the new song
        document.getElementById('song-title').innerText = songs[index].title; // Update the song title
        document.getElementById('song-artist').innerText = songs[index].artist || 'Unknown Artist'; 
    }

    // Listen for synchronization events from the server
    socket.on('play-song', (data) =>  {
        console.log('Received data for play:', data);
        if (data && typeof data.songIndex !== 'undefined') {
            if (data.songIndex >= 0 && data.songIndex < songs.length) {
                currentSongIndex = data.songIndex; // Update the current song index
                changeSong(currentSongIndex); // Change the song
            } else {
                console.error('Received invalid song index for play:', data.songIndex);
            }
        } else {
            console.error('Received invalid data for play:', data);
        }
    });

    socket.on('pause-song', () => {
        audioPlayer.pause();
    });

    socket.on('next-song', (data) => {
        if (data.songIndex >= 0 && data.songIndex < songs.length) {
            currentSongIndex = data.songIndex; // Update the current song index
            changeSong(currentSongIndex); // Change the song
        } else {
            console.error('Received invalid song index for next:', data.songIndex);
        }
    })
});