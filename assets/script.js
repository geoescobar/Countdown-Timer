var myVar;
var timer = document.getElementById("userInput");
var stylesheet = document.getElementById("stylesheet");
var timerr = document.getElementById("timerr");
var countDownSeconds;
function startTime() {
  myVar = setInterval(start, 1000);
  document.getElementById("timerr").innerHTML = timer.value;
  countDownSeconds = timer.value;
}

function start() {
  countDownSeconds--;
  timerr.innerHTML = countDownSeconds;
  if (countDownSeconds == 0) {
    stop();
    timerr.innerHTML = "Times Up";
    timerr.classList.add("animate__animated", "animate__headShake");
  }
}

function stop() {
  clearInterval(myVar);
}

function displayMode(sheet) {

  stylesheet.href = sheet
  localStorage.setItem('display-mode', sheet)
}

var setDisplay = localStorage.getItem("display-mode");

if (setDisplay === null) {
  displayMode("./assets/light.css");
} else {
  displayMode(setDisplay);
}
