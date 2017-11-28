document.addEventListener('DOMContentLoaded', () => {
    let API_URL = './videos.json';
    jsonManager.fetchData(API_URL);
});

const jsonManager = (() => {
    function fetchData(API_URL) {
        let data;
        const http = new XMLHttpRequest();

        http.open('GET', API_URL, true);
        http.setRequestHeader("Content-type", "application/json");
        http.onreadystatechange = function fetchOnload() {
            if (http.status === 200 && http.readyState === 4) {
                data = (JSON.parse(http.response));
                console.log(data);

                // Hérna væri flott að kalla á fall sem notar data-breytuna og smíðar HTML elements
            } else {
                console.log('Tókst ekki að sækja gögn');
            }
        };
        http.send();
    }

    return {fetchData};
})();

function vidplay() {
   var video = document.getElementById("Video1");
   var button = document.getElementById("play");
   if (video.paused) {
      video.play();
      button.style.backgroundImage = "url('img/pause.svg')";
   } else {
      video.pause();
      button.style.backgroundImage = "url('img/play.svg')";
   }
}

function restart() {
    var video = document.getElementById("Video1");
    video.currentTime = 0;
}

function skip(value) {
    var video = document.getElementById("Video1");
    video.currentTime += value;
}

function vidmute() {
    var video = document.getElementById("Video1")
    var button = document.getElementById("mute")
    if (video.muted) {
    video.muted= false;
    button.style.backgroundImage = "url('img/mute.svg')"
    } else {
    video.muted= true;
    button.style.backgroundImage = "url('img/unmute.svg')"
    }
}

function vidfullscreen() {
    var video = document.getElementById("Video1")
    var button = document.getElementById("fullscreen")
    if(video.requestFullscreen) {
    video.requestFullscreen();
    }
    else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
    }
    else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
    }
}
