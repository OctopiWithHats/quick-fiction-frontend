import React from 'react'
import Prompt from './Prompt'

class Story extends React.Component{
  //constructor
  constructor(props){
    super(props)
    this.state = {
      promptBeginning: this.props.story.beginning,
      promptEnding: this.props.story.ending,
      //author: this.props.story.author,
      text: this.props.story.text,
      //prompt: this.props.story.prompt
    }
  }

  //render
  render(){
    return(
      <div>
        <h2>{this.state.promptBeginning} {this.state.promptEnding}</h2>
        <p>{this.state.text}</p>
        <button>This will be a like button</button>
        <p>-----------------</p>
      </div>
    )
  }
}
export default Story
