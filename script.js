const timer = document.getElementById('stopwatch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('reset');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

//array of possible hex digits
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//constant for color flip button
const btn = document.getElementById("btn");

//
const color = document.querySelector(".backgroundColor");
const startColor = document.querySelector(".startColor");
const stopColor = document.querySelector(".stopColor");
const resetColor = document.querySelector(".resetColor");

btn.addEventListener("click", function () {
  // console.log(hexColor);
  var backgroundColorHex=getRandomHexColor();
  color.textContent = backgroundColorHex;
  document.body.style.backgroundColor = backgroundColorHex;

  var startColorHex=getRandomHexColor();
  start.style.backgroundColor = startColorHex;
  startColor.textContent = startColorHex;

  var stopColorHex=getRandomHexColor();
  stop.style.backgroundColor = stopColorHex;
  stopColor.textContent = stopColorHex;

  var resetColorHex=getRandomHexColor();
  reset.style.backgroundColor = resetColorHex;
  resetColor.textContent = resetColorHex;

 
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getRandomHexColor(){
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor

}