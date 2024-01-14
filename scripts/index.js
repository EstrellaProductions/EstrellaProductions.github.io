// var isPlaying = false;
// window.onload = function () {
//   togglePlay();
// };
// function togglePlay() {
//   var myAudio = document.getElementById("myAudio");
//   isPlaying ? myAudio.pause() : myAudio.play();
// }
// myAudio.onplaying = function () {
//   isPlaying = true;
//   document.getElementById("audioText").innerHTML =
//     "Playing: Estrella Productions - Official Theme Song";
// };
// myAudio.onpause = function () {
//   isPlaying = false;
//   document.getElementById("audioText").innerHTML =
//     "Paused: Estrella Productions - Official Theme Song";
// };

document.addEventListener("DOMContentLoaded", function () {
  const themeSong = document.getElementById("themeSong");
  const songInfo = document.querySelector(".song-info h3");
  const playPauseBtn = document.getElementById("playPauseBtn");

  playPauseBtn.addEventListener("click", function () {
    if (themeSong.paused) {
      themeSong.play();
      playPauseBtn.textContent = "Pause";
    } else {
      themeSong.pause();
      playPauseBtn.textContent = "Play";
    }
  });

  // Update song name once it's metadata is loaded
  themeSong.addEventListener("loadedmetadata", function () {
    songInfo.textContent = themeSong.currentSrc.split("/").pop().split(".")[0];
  });
});
