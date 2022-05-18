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
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/01%20-%20Easy%20Money.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/02%20-%20An%20Innocent%20Man.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/03%20-%20The%20Longest%20Time.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/04%20-%20This%20Night.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/05%20-%20Tell%20Her%20About%20It.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/06%20-%20Uptown%20Girl.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/07%20-%20Careless%20Talk.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/08%20-%20Christie%20Lee.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/09%20-%20Leave%20a%20Tender%20Moment%20Alone.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/10%20-%20Keeping%20the%20Faith.mp3",
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
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/01%20-%20Cunk.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/02%20-%20Dead%20Weight.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/03%20-%20Coconut%20Ranger.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/04%20-%20Leopard.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/05%20-%20John%20&%20Nancy.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/06%20-%20Beird.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/07%20-%20It's%20Alright.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/08%20-%20Small%20World.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/09%20-%20Pad%20Thai.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/10%20-%20Gettin'%20My%20Mom%20On.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/11%20-%20Databend.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/12%20-%20O.U.R.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/13%20-%20Pizza%20Boy.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/01%20-%20Cheeseburger%20Family.mp3",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/02%20-%20Fighter.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/01%20-%20Womb.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/02%20-%20When%20Life%20Began.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/03%20-%20Spirits.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/04%20-%20Wake%20Up.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/05%20-%20This%20Could%20Be%20Love.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/06%20-%20Stay.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/07%20-%20I%20Don't%20Need%20Your%20Love.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/08%20-%20You.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/09%20-%20Feels%20Like%20Home.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/10%20-%20Sleep%20Song.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/11%20-%20Hero.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/12%20-%20The%20System.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/13%20-%20Violet.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/14%20-%20Let%20Me%20Go.mp3",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/15%20-%20The%20Light.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/01%20-%20ok%20ok_.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/02%20-%20RUNAWAY.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/03%20-%20Maybe.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/04%20-%20the%20notion.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/05%20-%20still%20feel.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/06%20-%20TrusT.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/07%20-%20arrow.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/08%20-%20Pure%20Gold.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/09%20-%20ice%20cold.%20(with%20Kimbra).mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/10%20-%20Rest%20(with%20Samm%20Henshaw).mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/11%20-%20BREAKFAST.mp3",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/12%20-%20creature.mp3",
//    "https://king-pacaya.github.io/doc-storage/music//.mp3",
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
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Billy%20Joel%20-%20An%20Innocent%20Man/cover.jpg",
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
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber%20-%20HiLo/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/Jack%20Stauber's%20Micropop%20-%20Cheeseburger%20Family%20_%20Fighter/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/We%20The%20Lion%20-%20Kismet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
    "https://king-pacaya.github.io/doc-storage/music/half·alive%20-%20Now,%20Not%20Yet/cover.jpg",
//    "https://king-pacaya.github.io/doc-storage/music//cover.jpg",
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
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
    "Billy Joel",
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
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "Jack Stauber",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "We The Lion",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
    "Half·Alive",
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
    "Easy Money",
    "An Innocent Man",
    "The Longest Time",
    "This Night",
    "Tell Her About It",
    "Uptown Girl",
    "Careless Talk",
    "Christie Lee",
    "Leave a Tender Moment Alone",
    "Keeping the Faith",
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
    "Cunk",
    "Dead Weight",
    "Coconut Ranger",
    "Leopard",
    "John & Nancy",
    "Beird",
    "It's Alright",
    "Small World",
    "Pad Thai",
    "Gettin' My Mom On",
    "Databend",
    "O.U.R",
    "Pizza Boy",
    "Cheeseburger Family",
    "Fighter",
    "Womb",
    "When Life Began",
    "Spirits",
    "Wake Up",
    "This Could Be Love",
    "Stay",
    "I Don't Need Your Love",
    "You",
    "Feels Like Home",
    "Sleep Song",
    "Hero",
    "The System",
    "Violet",
    "Let Me Go",
    "The Light",
    "ok ok?",
    "RUNAWAY",
    "Maybe",
    "the notion",
    "still feel",
    "TrusT",
    "arrow",
    "Pure Gold",
    "ice cold. (with Kimbra)",
    "Rest (with Samm Henshaw)",
    "BREAKFAST",
    "creature",
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
