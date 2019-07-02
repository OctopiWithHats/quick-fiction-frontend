import React from 'react'

class Prompt extends React.Component{
  //constructor
  constructor(props){
    super(props)
    // this.state = {
    //   beginning: this.props.randomBeginning
    // }
  }

  renderRandomBeginning = () => {
    if(this.props.randomBeginning){
      //console.log(this.props.randomBeginning.word)
      return(
        <span>{this.props.randomBeginning.word}</span>
      )
    }
  }

  renderRandomEnding = () => {
    if(this.props.randomEnding){
      //console.log(this.props.randomBeginning.word)
      return(
        <span>{this.props.randomEnding.word}</span>
      )
    }
  }

  render(){
    console.log("prop beginning", this.props.randomBeginning)
    return(
      <div>
        <h3>
          {this.renderRandomBeginning()} {this.renderRandomEnding()}
        </h3>
      </div>
    )
  }
}
export default Prompt
