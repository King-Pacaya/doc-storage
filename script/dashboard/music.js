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
    "https://king-pacaya.github.io/doc-storage/music/m.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/01%20-%20Rock%20&%20Roll.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/02%20-%20OK,%20It's%20Alright%20with%20Me.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/03%20-%20Watching%20You%20Watch%20Him.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/04%20-%20Food%20Chain.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/05%20-%20Breakdown%20More.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/06%20-%20All%20Over%20Now.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/07%20-%20You've%20Got%20You.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/08%20-%20Outside%20Villanova.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/09%20-%20Living%20In%20the%20Afterlife.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/10%20-%20I'm%20Not%20Cool.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/11%20-%20Talk%20Is%20Cheap.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/12%20-%20Lisa%20(Bonus Track).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/13%20-%20Don't%20Hold Back.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/14%20-%20Best%20Days.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/15%20-%20You%20Don't%20Have%20to%20Believe%20Me.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Right%20Where%20I’m%20Supposed%20To%20Be/01%20-%20Right%20Where%20I’m%20Supposed%20To%20Be.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Right%20Where%20I’m%20Supposed%20To%20Be/02%20-%20The%20Best%20Part.mp3",
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
    "https://king-pacaya.github.io/doc-storage/music/m.png",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Rock'n%20Roll/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Right%20Where%20I’m%20Supposed%20To%20Be/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Eric%20Hutchinson%20-%20Right%20Where%20I’m%20Supposed%20To%20Be/cover.jpg",
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
    "Just play",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
    "Eric Hutchinson",
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
    "Seriously just play",
    "Rock & Roll",
    "OK, It's Alright with Me",
    "Watching You Watch Him",
    "Food Chain",
    "Breakdown More",
    "All Over Now",
    "You've Got You",
    "Outside Villanova",
    "Living In the Afterlife",
    "I'm Not Cool",
    "Talk Is Cheap",
    "Lisa (Bonus Track)",
    "Don't Hold Back",
    "Best Days",
    "You Don't Have to Believe Me",
    "Right Where I’m Supposed To Be",
    "The Best Part",
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
