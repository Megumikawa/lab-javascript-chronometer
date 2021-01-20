class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  twoDigitsNumber(currentTime) {
    if( currentTime < 10 ) {
      return ("0" + currentTime)
    } else {
      return currentTime.toString()
    }
  }

  stopClick() {
    clearInterval(this.intervalSeconds)
  }

  resetClick() {
    this.currentTime = 0
    this.intervalId = 0
  }

  splitClick() {
    // let min = this.getMinutes()
    // let sec = this.getSeconds()

    // min = this.twoDigitsNumber(min)
    // sec = this.twoDigitsNumber(sec)
    // return `${min}:${sec}`

    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}
