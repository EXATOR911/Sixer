// script.js
document.getElementById("audioToggle").addEventListener("change", function () {
  var SixersSong = document.getElementById("ForYouSixer");

  if (this.checked) {
    SixersSong.play();
  } else {
    SixersSong.pause();
  }
});

document.getElementById("Tri").addEventListener("click", function () {
  {
    alert("I'll be seeing you Pines family! You can't kill an idea!!");
  }
});

var blink_speed = 1000;
var t = setInterval(function () {
  var ele = document.getElementById("Tri");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);
