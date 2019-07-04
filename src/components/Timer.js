import React, { Component } from 'react';
//import NewStoryForm from './NewStoryForm'

class Timer extends Component {

  constructor(){
    super()
    this.state = {
      seconds: 59,
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        //seconds: --this.state.seconds
        seconds: this.state.seconds === 0 ? 0 : --this.state.seconds
        // seconds: this.state.seconds < 1 ? 59 : --this.state.seconds,
        //
        // minutes: this.state.seconds === 0 ? --this.state.minutes : this.state.minutes
      })
    }, 1000)
  }

  whatShows = () => {
    if(this.state.seconds === 0){
      return(
        <div id="timeUp">
          <h2 className="stopTime">Time's Up!</h2>
        </div>
      )
    } else {
      return(
        <div>
          <h2>{this.state.seconds}</h2>
        </div>
      )
    }
  }


  render(){
    return(
      <div>
        <h2>{this.whatShows()}</h2>
      </div>
    )
  }
}

export default Timer;
