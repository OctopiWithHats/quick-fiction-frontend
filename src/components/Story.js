import React from 'react'
import Prompt from './Prompt'
import { Card, Button } from 'semantic-ui-react'

class Story extends React.Component{
  //constructor
  constructor(props){
    super(props)
    this.state = {
      // promptBeginning: this.props.story.beginning,
      // promptEnding: this.props.story.ending,
      author: this.props.story.author,
      text: this.props.story.text,
      likes: this.props.story.likes
    }
  }

  //add like
  addLike = (props) => {
    console.log(this.props.likes)
    this.setState({
      likes: this.props.likes + 1
    })
    console.log(this.props.likes)
  }

  handleLikes = (event) => {
    this.setState({
      likes: this.state.likes + 1
    })
    console.log(this.state.likes)

    fetch('http://localhost:3000/stories/:id', {
      //method post
      method: 'PATCH',
      //set headers
      headers: {
        'Content-Type': 'application/json',
        //Accept: 'application/json'
      },
      //set body, stringify JSON
      body: JSON.stringify({
        story: {
          likes: this.state.likes
        }
      })
    })
    .then(response => response.json())
    .then(story => this.addLike)
  }

  //render
  render(){
    return(
      <div
        style={{
          background: '#B9FAF8',
          border: '5px inset #E5E7E6',
          padding: '5px'
        }}
      >
        <Card.Group>
        <Card>
            <Card.Content >
              <Card.Header>{this.state.author}</Card.Header>
              <Card.Description>{this.state.text}</Card.Description>
            </Card.Content>

          </Card>
        </Card.Group>
      </div>

    )
  }
}
export default Story
