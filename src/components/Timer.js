import React, { Component } from 'react';
//import NewStoryForm from './NewStoryForm'

class Timer extends Component {

  constructor(props){
    super(props)
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
    const storyBox = document.getElementById("textBox")
    if(this.state.seconds === 0){
      //storyBox.readOnly=true
      //storyBox.contentEditable=false
      //this.props.submitFunction()
      return(
        <div id="timeUp">
          <h2 className="stopTime">Time's Up!</h2>
        </div>
      )
    } else {
      //storyBox.readOnly="false"
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
