// Get the audio element from the HTML
const audio = document.getElementById("HeySixer");

// Play the audio when the page loads
window.addEventListener("load", () => {
  audio.play();
});

var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
  var ele = document.getElementById("Tri");
  ele.style.visibility = ele.style.visibility == "hidden" ? "" : "hidden";
}, blink_speed);
