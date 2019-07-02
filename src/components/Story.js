import React from 'react'

class Story extends React.Component{
  //constructor
  constructor(props){
    super(props)
    this.state = {
      author: this.props.story.author,
      text: this.props.story.text,
      prompt: this.props.story.prompt
    }
  }

  //render
  render(){
    return(
      <div>
        <h2>{this.state.author}</h2>
        <h3>{this.state.prompt}</h3>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
export default Story
