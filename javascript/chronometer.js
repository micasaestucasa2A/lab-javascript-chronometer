class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => this.currentTime += 1, 1000)
  }

  getMinutes() {
  return Math.trunc(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let stringVal = `${value}`
    if (stringVal.length == 1){
      return `0${value}`
    }
    else return `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + `:` + this.computeTwoDigitNumber(this.getSeconds())
    
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
