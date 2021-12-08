//const Chronometer = require("./chronometer");

const chrono1 = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId = null
function printTime() {
  intervalId = setInterval(() => {
  printMinutes()
  printSeconds()
  }, 1000)
}

function printMinutes() {
  let minutes = chrono1.prototype.computeTwoDigitNumber(chrono1.prototype.getMinutes)
  minDecElement.innerHTML = minutes.charAt(0)
  minUniElement.innerHTML = minutes.charAt(1)
}

function printSeconds() {
  let secondes = chrono1.prototype.computeTwoDigitNumber(chrono1.prototype.getMinutes)
  secDecElement.innerHTML = secondes.charAt(0)
  secUniElement.innerHTML = secondes.charAt(1)
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
  btnLeftElement.classList.add('stop')
  btnLeftElement.classList.remove('start')
  btnLeftElement.innerHTML = 'STOP'
}

function setSplitBtn() {
  //btnRightElement.classList.add('btn split')
  //btnRightElement.classList.remove('btn reset')
  //btnRightElement.innerHTML ='SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.add('start')
  btnLeftElement.classList.remove('stop')
  btnLeftElement.innerHTML = 'START'
}

function setResetBtn() {
  //btnRightElement.classList.add('btn reset')
  //btnRightElement.classList.remove('btn split')
  //btnRightElement.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains(`stop`)) setStartBtn()
  else setStopBtn()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

});