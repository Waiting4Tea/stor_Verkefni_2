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
