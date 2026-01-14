let play = document.getElementById("play");
let progressBar = document.getElementById("progressBar");
let audio = new Audio(
  "https://uc494a6868adad6cfe9de2113713.dl.dropboxusercontent.com/cd/0/get/C4y204EYI08FtZ2RrUQYzLJ5n6Yzoo8ZICDA7nAczpbgRUhckspb5ja0DN_BXnFH4i4docG4Mloxnw1f63ozHqs_kvUIGd-pQthANhVjaO1V_4XTrCzJaaQUcMDP9K5CNmq8lc6NgqmcvfOxzPgBne8r/file?dl=1#"
);

let currentSong = 1;

play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
  } else {
    audio.pause();
    play.classList.remove("fa-circle-pause");
    play.classList.add("fa-circle-play");
  }
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  progressBar.style.background = `linear-gradient(to right, #21a600ff ${progress}%, #333 ${progress}%)`;
});

progressBar.addEventListener("input", function () {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #21a600ff ${value}%, #333 ${value}%)`;
  audio.currentTime = (progressBar.value * audio.duration) / 100;
});

let playMusic = Array.from(document.getElementsByClassName("playMusic"));

makeAllPlay = () => {
  playMusic.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};

playMusic.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlay();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    play.classList.add("fa-circle-pause");

    let index = parseInt(e.target.id);
    currentSong = index;
    audio.src = songs[index - 1].songPath;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
  });
});

let allMusic = Array.from(document.getElementsByClassName("music-card"));
songs = [
  {
    songName: "song 1",
    songDes: "This is the description for song 1",
    songImage:
      "c:Users/sneha/Downloads/WhatsApp Image 2026-01-10 at 4.09.48 PM.jpeg",
    songPath: "songs/Audio1.mp3",
  },
  {
    songName: "song 2",
    songDes: "This is the description for song 2",
    songImage: "c:Users/sneha/Downloads/image 2.jpg",
    songPath: "songs/Audio2.mp3",
  },
  {
    songName: "song 3",
    songDes: "This is the description for song 3",
    songImage: "c:Users/sneha/Downloads/image 3.jpg",
    songPath: "songs/Audio3.mp3",
  },
  {
    songName: "song 4",
    songDes: "This is the description for song 4",
    songImage: "c:Users/sneha/Downloads/image 4.jpg",
    songPath: "songs/Audio4.mp3",
  },
  {
    songName: "song 5",
    songDes: "This is the description for song 5",
    songImage:
      "c:Users/sneha/Downloads/WhatsApp Image 2026-01-10 at 4.09.48 PM.jpeg",
    songPath: "songs/Audio5.mp3",
  },
  {
    songName: "song 6",
    songDes: "This is the description for song 6",
    songImage: "c:Users/sneha/Downloads/image 2.jpg",
    songPath: "songs/Audio6.mp3",
  },
  {
    songName: "song 7",
    songDes: "This is the description for song 7",
    songImage: "c:Users/sneha/Downloads/image 3.jpg",
    songPath: "songs/Audio7.mp3",
  },
  {
    songName: "song 8",
    songDes: "This is the description for song 8",
    songImage: "c:Users/sneha/Downloads/image 4.jpg",
    songPath: "songs/Audio8.mp3",
  },
  {
    songName: "song 9",
    songDes: "This is the description for song 9",
    songImage:
      "c:Users/sneha/Downloads/WhatsApp Image 2026-01-10 at 4.09.48 PM.jpeg",
    songPath: "songs/Audio9.mp3",
  },
  {
    songName: "song 10",
    songDes: "This is the description for song 10",
    songImage: "c:Users/sneha/Downloads/image 2.jpg",
    songPath: "songs/Audio10.mp3",
  },
  {
    songName: "song 11",
    songDes: "This is the description for song 11",
    songImage: "c:Users/sneha/Downloads/image 3.jpg",
    songPath: "songs/Audio11.mp3",
  },
  {
    songName: "song 12",
    songDes: "This is the description for song 12",
    songImage: "c:Users/sneha/Downloads/image 4.jpg",
    songPath: "songs/Audio12.mp3",
  },
  {
    songName: "song 13",
    songDes: "This is the description for song 13",
    songImage:
      "c:Users/sneha/Downloads/WhatsApp Image 2026-01-10 at 4.09.48 PM.jpeg",
    songPath: "songs/Audio13.mp3",
  },
  {
    songName: "song 14",
    songDes: "This is the description for song 14",
    songImage: "c:Users/sneha/Downloads/image 2.jpg",
    songPath: "songs/Audio14.mp3",
  },
];

allMusic.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].songImage;
  element.getElementsByClassName("img-title")[0].innerText = songs[i].songName;
  element.getElementsByClassName("img-description")[0].innerText =
    songs[i].songDes;
});

let shuffle = document.getElementById("shuffle");
let repeat = document.getElementById("repeat");
let nowBar = document.querySelector(".now-bar");

let songOnRepeat = false;
let songOnShuffle = false;

function shuffleSongs(originalOrder) {
  let shuffle = [...originalOrder];
  for (let i = shuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  }
  return shuffle;
}

shuffle.addEventListener("click", () => {
  if (!songOnShuffle) {
    songOnShuffle = true;
    songOnRepeat = false;
    shuffle.classList.add("active");
    repeat.classList.remove("active");

    order = shuffleSongs(songs);
  } else {
    songOnShuffle = false;
    shuffle.classList.remove("active");

    order = songs;
  }
});

repeat.addEventListener("click", () => {
  if (!songOnRepeat) {
    songOnRepeat = true;
    songOnShuffle = false;
    repeat.classList.add("active");
    shuffle.classList.remove("active");
  } else {
    songOnRepeat = false;
    repeat.classList.remove("active");
  }
});

playNextSong = () => {
  if (!songOnRepeat) {
    let nextSong = (currentSong + 1) % playMusic.length;
    let totalSongs = order.length;
    currentSong = nextSong == 0 ? totalSongs : nextSong;

    audio.src = order[currentSong - 1].songPath;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
  } else {
    audio.src = order[currentSong - 1].songPath;
    audio.currentTime = 0;
    audio.play();
    updateNowBar();
  }
};

playPrevSong = () => {
  let prevSong = currentSong - 1;
  let totalSongs = order.length;
  currentSong = prevSong == 0 ? totalSongs : prevSong;
  audio.src = order[currentSong - 1].songPath;
  audio.currentTime = 0;
  audio.play();
  updateNowBar();
};

function updateNowBar() {
  nowBar.getElementsByTagName("img")[0].src = order[currentSong - 1].songImage;
  nowBar.getElementsByClassName("img-title-info")[0].innerText =
    order[currentSong - 1].songName;
  nowBar.getElementsByClassName("img-des-info")[0].innerText =
    order[currentSong - 1].songDes;
}

forward = document.getElementById("forward");
backward = document.getElementById("backward");

forward.addEventListener("click", () => {
  playNextSong();
});

audio.addEventListener("ended", () => {
  playNextSong();
});

backward.addEventListener("click", () => {
  playPrevSong();
});
