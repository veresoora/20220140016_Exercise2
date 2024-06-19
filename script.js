const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("toggle-menu");
const closeMenu = document.getElementById("close-menu");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
closeMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("play");

  const progress = document.getElementById("progress");
  const currentTimeElement = document.getElementById("current-time");
  const durationElement = document.getElementById("duration");

  let isPlaying = false;

  // Play or pause audio
  playButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playButton.innerHTML = '<i class="fa fa-play"></i>';
    } else {
      audio.play();
      playButton.innerHTML = '<i class="fa fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  });

  // Update progress bar and time
  audio.addEventListener("timeupdate", () => {
    const { currentTime, duration } = audio;
    progress.value = (currentTime / duration) * 100;

    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
    if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;

    currentTimeElement.textContent = `${currentMinutes}:${currentSeconds}`;
    durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
  });

  // Seek audio
  progress.addEventListener("input", () => {
    const { duration } = audio;
    audio.currentTime = (progress.value / 100) * duration;
  });

  // Placeholder for previous and next buttons functionality
  prevButton.addEventListener("click", () => {
    // Logic for previous audio
  });

  nextButton.addEventListener("click", () => {
    // Logic for next audio
  });
});
