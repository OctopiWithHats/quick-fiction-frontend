import React from 'react'
import Prompt from './Prompt'

class Story extends React.Component{
  //constructor
  constructor(props){
    super(props)
    this.state = {
      // promptBeginning: this.props.story.beginning,
      // promptEnding: this.props.story.ending,
      //author: this.props.story.author,
      text: this.props.story.text,
      likes: this.props.story.likes
    }
  }

  handleLikes = (event) => {
    this.setState({
      likes: this.state.likes + 1
    })
    console.log(this.state.likes)

    fetch('http://localhost:3000/stories', {
      //method post
      method: 'POST',
      //set headers
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      //set body, stringify JSON
      body: JSON.stringify({
        story: {
          likes: this.state.likes
        }
      })
    })
    .then(response => response.json())
    .then(story => console.log(story.likes))
  }

  //render
  render(){
    return(
      <div>
        <p>{this.state.text}</p>
        <p>Likes: {this.state.likes}</p>
        <button
          id="likes"
          onClick={this.handleLikes}
        >
          Like
        </button>
        <p>-----------------</p>
      </div>
    )
  }
}
export default Story
