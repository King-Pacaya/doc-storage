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
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/01%20-%20Keep%20Your%20Head%20Up.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/02%20-%20Fine%20By%20Me.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/03%20-%20Slow.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/04%20-%20You%20Should%20Know%20Better.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/05%20-%20Lunatic.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/06%20-%20Miss%20Me.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/07%20-%20The%20Pocket.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/08%20-%20Ladies.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/09%20-%20Love%20Love%20Love%20(Let%20You%20Go).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/10%20-%20Build%20Me%20a%20Girl.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/11%20-%20Biggest%20Man%20in%20Los%20Angeles.mp3",
    ];

    thumbnails = [
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Andy%20Grammer%20-%20Andy%20Grammer/cover.jpg",
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
