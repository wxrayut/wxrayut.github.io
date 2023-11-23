
// let progress = document.getElementById("progress");
// let song = document.getElementById("song");
// let control = document.getElementById("ctrl-icon");

// song.onloadeddata = () => {
//     progress.max = song.duration;
// }

// function toggleAudio() {
//     if (song.paused) {
//         song.play();
//         control.classList.remove("fa-play");
//         control.classList.add("fa-pause");
//     } else {
//         song.pause();
//         control.classList.remove("fa-pause");
//         control.classList.add("fa-play");
//     }
// }

// song.addEventListener("timeupdate", () => {
//     progress.value = song.currentTime;
// });

// progress.oninput = () => {
//     song.currentTime = progress.value;
// };

// song.onended = () => {
//     control.classList.remove("fa-pause");
//     control.classList.add("fa-play");
// };

let playlist = [
    {
        title: "All I Know",
        artist: "The Weeknd ft. Future",
        source: "script/playlist/The Weeknd - All I Know ft. Future.mp3"
    },
    {
        title: "Six Feet Under",
        artist: "The Weeknd",
        source: "script/playlist/The Weeknd - Six Feet Under.mp3"
    },
    {
        title: "Ordinary Life",
        artist: "The Weeknd",
        source: "script/playlist/The Weeknd - Ordinary Life.mp3"
    },
    {
        title: "Shortcut To Heaven",
        artist: "lullaboy",
        source: "script/playlist/lullaboy - Shortcut To Heaven.mp3"
    },
    {
        title: "Turn Back Time",
        artist: "Zack Tabudlo ft. Violette Wautier",
        source: "script/playlist/Zack Tabudlo - Turn Back Time ft. Violette Wautier.mp3"
    },
    {
        title: "everything hits me at once",
        artist: "vaultboy",
        source: "script/playlist/vaultboy - everything hits me at once.mp3"
    },
    {
        title: "Marvin Gaye",
        artist: "Charlie Puth",
        source: "script/playlist/Charlie Puth - Marvin Gaye.mp3"
    },
]

const audio = document.getElementById("song");
const prevBtn = document.getElementById("prevBtn");
const control = document.getElementById("ctrl-icon");
const nextBtn = document.getElementById("nextBtn");
let songTitle = document.querySelector(".music-player h1");
let songArtist = document.querySelector(".music-player p");
let currentSongIndex = 0;
let isPlaying = false;
let progress = document.getElementById("progress");

function playSong(i) {
    if (i >= 0 && i < playlist.length) {
        audio.src = playlist[i].source;
        songTitle.textContent = playlist[i].title;
        songArtist.textContent = playlist[i].artist;
        audio.load();
        currentSongIndex = i;
        toggleAudio();
    }
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
    } else {
        audio.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
    }
}

song.onloadeddata = () => {
    progress.max = song.duration;
}

audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
});

progress.oninput = () => {
    audio.currentTime = progress.value;
};

audio.onended = () => {
    control.classList.remove("fa-pause");
    control.classList.add("fa-play");
};

prevBtn.addEventListener('click', () => {
    playSong(currentSongIndex - 1);
});

nextBtn.addEventListener('click', () => {
    playSong(currentSongIndex + 1);
});