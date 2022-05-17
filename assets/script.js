var myVar;
var timer = document.getElementById("userInput");
var stylesheet = document.getElementById("stylesheet");
var countDownSeconds;
function startTime() {
  myVar = setInterval(start, 1000);
  document.getElementById("timerr").innerHTML = timer.value;
  countDownSeconds = timer.value;
}

function start() {
  countDownSeconds--;
  document.getElementById("timerr").innerHTML = countDownSeconds;
  if (countDownSeconds == 0) {
    stop();
    document.getElementById("timerr").innerHTML = "Times Up";
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
