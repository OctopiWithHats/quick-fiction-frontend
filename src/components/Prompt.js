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
    if(this.props.beginning){
      //console.log(this.props.randomBeginning.word)
      return(
        <span>{this.props.beginning.word}</span>
      )
    }
  }

  renderRandomEnding = () => {
    if(this.props.ending){
      //console.log(this.props.randomBeginning.word)
      return(
        <span>{this.props.ending.word}</span>
      )
    }
  }

  render(){
    console.log("prompt props", this.props)
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
