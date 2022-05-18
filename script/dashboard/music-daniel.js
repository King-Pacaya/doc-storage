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
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/01%20-%20You%20Should%20Be%20Dancing.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/02%20-%20Night%20Fever.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/03%20-%20Tragedy.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/04%20-%20Shadow%20Dancing.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/05%20-%20More%20Than%20A%20Woman.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/06%20-%20Making%20A%20Fire.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/07%20-%20Shame%20Shame.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/08%20-%20Waiting%20On%20A%20War.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/09%20-%20No%20Son%20Of%20Mine.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/10%20-%20Cloudspotter.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/01%20-%20Cheeseburger%20Family.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/02%20-%20Fighter.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/01%20-%20In%20One%20Ear%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/02%20-%202024%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/03%20-%20Aberdeen%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/04%20-%20Tiny%20Little%20Robots%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/05%20-%20Lotus%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/06%20-%20Around%20My%20Head%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/07%20-%20Japanese%20Buffalo%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/08%20-%20Back%20Stabbin'%20Betty%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/09%20-%20Back%20Against%20the%20Wall%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/10%20-%20Flow%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/11%20-%20Indy%20Kidz%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/12%20-%20Always%20Something%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/13%20-%20Sell%20Yourself%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/14%20-%20Rubber%20Ball%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/15%20-%20Ain't%20No%20Rest%20for%20the%20Wicked%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/16%20-%20Shake%20Me%20Down%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/17%20-%20Sabertooth%20Tiger%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/18%20-%20Psycho%20Killer%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/19%20-%20Shiver%20(Live%20From%20The%20Vic%20In%20Chicago).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/01%20-%20Cry%20Baby%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/02%20-%20Whole%20Wide%20World%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/03%20-%20Sweetie%20Little%20Jean%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/04%20-%20Spiderhead%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/05%20-%20Take%20It%20or%20Leave%20It%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/06%20-%20Too%20Late%20To%20Say%20Goodbye%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/07%20-%20Punchin'%20Bag%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/08%20-%20Shake%20Me%20Down%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/09%20-%20Telescope%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/10%20-%20Instant%20Crush%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/11%20-%20Trouble%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/12%20-%20Ain't%20No%20Rest%20for%20the%20Wicked%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/13%20-%20Rubber%20Ball%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/14%20-%20Aberdeen%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/15%20-%20Golden%20Brown%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/16%20-%20Cold%20Cold%20Cold%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/17%20-%20How%20Are%20You%20True%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/18%20-%20Come%20a%20Little%20Closer%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/19%20-%20Back%20Against%20the%20Wall%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/20%20-%20Cigarette%20Daydreams%20(Unpeeled).mp3",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/21%20-%20Right%20Before%20My%20Eyes%20(Unpeeled).mp3",
//    "https://king-pacaya.github.io/doc-storage/music//.mp3",
    ];

    thumbnails = [
    "https://king-pacaya.github.io/doc-storage/music/m.png",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Foo%20Fighters%20-%20Dee%20Gees%20_%20Hail%20Satin%20-%20Foo%20Fighters%20_%20Live/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Live%20From%20The%20Vic%20In%20Chicago/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Cage%20The%20Elephant%20-%20Unpeeled/cover.jpg",
//    "https://king-pacaya.github.io/doc-storage/music//cover.jpg",
    ];

    trackArtists = [
    "Dale play",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Foo Fighters",
    "Jack Stauber's Micropop",
    "Jack Stauber's Micropop",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    "Cage The Elephant",
    ];

    trackTitles = [
    "Enserio dale play",
    "You Should Be Dancing",
    "Night Fever",
    "Tragedy",
    "Shadow Dancing",
    "More Than A Woman",
    "Making A Fire",
    "Shame Shame",
    "Waiting On A War",
    "No Son Of Mine",
    "Cloudspotter",
    "Cheeseburger Family",
    "Fighter",
    "In One Ear",
    "2024",
    "Aberdeen",
    "Tiny Little Robots",
    "Lotus",
    "Around My Head",
    "Japanese Buffalo",
    "Back Stabbin' Betty",
    "Back Against the Wall",
    "Flow",
    "Indy Kidz",
    "Always Something",
    "Sell Yourself",
    "Rubber Ball",
    "Ain't No Rest for the Wicked",
    "Shake Me Down",
    "Sabertooth Tiger",
    "Psycho Killer",
    "Shiver",
    "Cry Baby",
    "Whole Wide World",
    "Sweetie Little Jean",
    "Spiderhead",
    "Take It or Leave It",
    "Too Late To Say Goodbye",
    "Punchin' Bag",
    "Shake Me Down",
    "Telescope",
    "Instant Crush",
    "Trouble",
    "Ain't No Rest for the Wicked",
    "Rubber Ball",
    "Aberdeen",
    "Golden Brown",
    "Cold Cold Cold",
    "How Are You True",
    "Come a Little Closer",
    "Back Against the Wall",
    "Cigarette Daydreams",
    "Right Before My Eyes",
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
