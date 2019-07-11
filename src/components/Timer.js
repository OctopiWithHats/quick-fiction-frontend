import React, { Component } from 'react';

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
      })
    }, 1000)
  }

  whatShows = () => {
    let storyBox = document.getElementById("textBox")
    if(this.state.seconds === 0){
      storyBox.readOnly=true
      storyBox.style={
        background: 'black',
        height: '40px',
        width: '95%',
        margin: '0 10px 10px',
        overflow: 'scroll'
      }
      return(
        <div id="timeUp">
          <h1 className="stopTime">Time's Up!</h1>
        </div>
      )
    } else {
      return(
        <div>
          <h1>{this.state.seconds}</h1>
        </div>
      )
    }
  }


  render(){
    return(
      <div
        style={{
          position: 'relative',
          top: '18%'
        }}
      >
        <h3
          style={{
            color: '#13070C'
          }}
        >
          {this.whatShows()}
        </h3>
      </div>
    )
  }
}

export default Timer;
