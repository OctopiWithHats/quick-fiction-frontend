import React from 'react'
//import NewStoryForm from './NewStoryForm'
import { Form } from 'semantic-ui-react'

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

  renderCompletePrompt = () => {
    let complete = `${this.renderRandomBeginning()} ${this.renderRandomEnding()}`

    return `${complete}`
  }

  render(){
    console.log("prompt props", this.props)
    console.log("complete prompt", this.renderCompletePrompt())
    return(
      <div>
          <h3 onChange={this.props.handleChange}>
            {this.renderRandomBeginning()} {this.renderRandomEnding()}
          </h3>
      </div>
    )
  }
}
export default Prompt
