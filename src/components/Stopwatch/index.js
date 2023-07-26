// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timerInSeconds: 0,
    isTimerRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.timerInterVal)
  }

  onClickReset = () => {
    clearInterval(this.timerInterVal)
    this.setState({isTimerRunning: false, timerInSeconds: 0})
  }

  onClickStop = () => {
    clearInterval(this.timerInterVal)
    this.setState({isTimerRunning: false})
  }

  onClickStart = () => {
    this.timerInterVal = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  returnMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  returnSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const stopWatchTimer = `${this.returnMinutes()}:${this.returnSeconds()}`
    return (
      <div className="app-container">
        <h1 className="stop-watch-heading">Stopwatch</h1>
        <div className="timer-start-stop-reset-card">
          <div className="stop-watch-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stop-watch"
            />
            <p className="timer">Timer</p>
          </div>
          <h1 className="timer-count">{stopWatchTimer}</h1>
          <button
            className="start-button"
            type="button"
            onClick={this.onClickStart}
            disabled={isTimerRunning}
          >
            Start
          </button>
          <button
            className="stop-button"
            type="button"
            onClick={this.onClickStop}
          >
            Stop
          </button>
          <button
            className="reset-button"
            type="button"
            onClick={this.onClickReset}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
