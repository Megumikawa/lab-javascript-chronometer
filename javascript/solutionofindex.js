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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minUni.innerHTML = min[1]
  minDec.innerHTML = min[0] 
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = sec[0]
  secUni.innerHTML = sec[1]
}

// ==> BONUS
function printMilliseconds() {
  // 0
  // 172436152435412563
  let milli = chronometer.twoDigitsNumber(chronometer.milliseconds)
  milUni.innerHTML = milli[1]  
  milDec.innerHTML = milli[0] 
}

function printSplit() {
  // grab the split time 
  let time = chronometer.splitClick()

  // create the li <li></li>
  let li = document.createElement('li')

  //<li>03:12</li>
  li.innerHTML = time
  splits.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime, printMilliseconds)
  }
  else {
    setStartBtn();
    setResetBtn()
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
     if (btnRight.classList.contains('split')) {
       printSplit();
     }
     else {
        chronometer.resetClick();
        splits.innerHTML = ""
        printTime();
        printMilliseconds();
     }
});