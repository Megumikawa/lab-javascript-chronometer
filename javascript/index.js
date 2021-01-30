const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  
}



function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minUni.innerHTML = min[1]
  minDec.innetHTML = min[0]
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secUni.innerHTML = min[0]
  secDec.innetHTML = min[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}




function setStopBtn() {
  // btnLeft.setAttribute("class","btn stop")
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
  btnLeft.innerText = "STOP"
}

function setSplitBtn() {
  // btnRight.setAttribute("class", "btn split")
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  btnRight.innerText = "SPLIT"
}

function setStartBtn() {
  // btnLeft.setAttribute("class", "btn start")
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
  btnLeft.innerText = "START"
}

function setResetBtn() {
  // btnRight.setAttribute("class", "btn reset")
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
  btnRight.innerText = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime)
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('stop')) {
    printSplit()
  } else {
    setResetBtn()
    printTime()
    chronometer.resetClick()
    splits.innerHTML = ""
  }
});
