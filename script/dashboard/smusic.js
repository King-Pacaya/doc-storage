//Music
  //Popup
    function musicbtn() {
    document.getElementById("music").classList.toggle("mshow");
    }
  //App
    const track = document.getElementById("track");
    const thumbnail = document.getElementById("thumbnail");
    const background = document.getElementById("background");
    const trackArtist = document.getElementById("track-artist");
    const trackTitle = document.getElementById("track-title");
    const progressBar = document.getElementById("progressBar");
    const currentTime = document.getElementById("currentTime");
    const durationTime = document.getElementById("durationTime");

    let play = document.getElementById("play");
    let pause = document.getElementById("pause");
    let next = document.getElementById("next-track");
    let prev = document.getElementById("prev-track");
    trackIndex = 0;

    tracks = [
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/01 - Keep Your Head Up.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/02 - Fine By Me.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/03 - Slow.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/04 - You Should Know Better.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/05 - Lunatic.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/06 - Miss Me.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/07 - The Pocket.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/08 - Ladies.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/09 - Love Love Love (Let You Go).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/10 - Build Me a Girl.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/11 - Biggest Man in Los Angeles.mp3",
    ];

    thumbnails = [
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy Grammer - Andy Grammer/cover.jpg",
    ];

    trackArtists = [
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    "Andy Grammer",
    ];

    trackTitles = [
    "Keep Your Head Up",
    "Fine By Me",
    "Slow",
    "You Should Know Better",
    "Lunatic",
    "Miss Me",
    "The Pocket",
    "Ladies",
    "Love Love Love (Let You Go)",
    "Build Me a Girl",
    "Biggest Man in Los Angeles",
    ];

    let playing = true;

    function pausePlay() {
      if (playing) {
        play.style.display = "none";
        pause.style.display = "block";

        track.play();
        playing = false;
      } else {
        pause.style.display = "none";
        play.style.display = "block";

        thumbnail.style.transform = "scale(1)";

        track.pause();
        playing = true;
      }
    }

    play.addEventListener("click", pausePlay);
    pause.addEventListener("click", pausePlay);

    track.addEventListener("ended", nextTrack);

    function nextTrack() {
      trackIndex++;
      if (trackIndex > tracks.length - 1) {
        trackIndex = 0;
      }

      track.src = tracks[trackIndex];
      thumbnail.src = thumbnails[trackIndex];
      background.src = thumbnails[trackIndex];

      trackArtist.textContent = trackArtists[trackIndex];
      trackTitle.textContent = trackTitles[trackIndex];

      playing = true;
      pausePlay();
    }

    next.addEventListener("click", nextTrack);

    function prevTrack() {
      trackIndex--;
      if (trackIndex < 0) {
        trackIndex = tracks.length - 1;
      }

      track.src = tracks[trackIndex];
      thumbnail.src = thumbnails[trackIndex];
      background.src = thumbnails[trackIndex];

      trackArtist.textContent = trackArtists[trackIndex];
      trackTitle.textContent = trackTitles[trackIndex];

      playing = true;
      pausePlay();
    }

    prev.addEventListener("click", prevTrack);

    function progressValue() {
      progressBar.max = track.duration;
      progressBar.value = track.currentTime;

      currentTime.textContent = formatTime(track.currentTime);
      durationTime.textContent = formatTime(track.duration);
    }

    setInterval(progressValue, 500);

    function formatTime(sec) {
      let minutes = Math.floor(sec / 60);
      let seconds = Math.floor(sec - minutes * 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    }

    function changeProgressBar() {
      track.currentTime = progressBar.value;
    }

    progressBar.addEventListener("click", changeProgressBar);
