import React from 'react'
import StoryCollection from './StoryCollection'

class StoryIndex extends React.Component{
  //constructor
  constructor(){
    super()
    this.state = {
      storyCollection: [],
    }
  }

  //fetch stories in componentDidMount
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/stories')
      .then(result => result.json())
      .then(storyCollection => this.setState({
        storyCollection: storyCollection
      })
    )
  }
  //add new story
  addStory = story => {
    this.setState({
      storyCollection: [...this.state.storyCollection, story]
    })
  }

  //render
  render(){
    console.log(this.state.storyCollection)
    
    return(
      <div>
        <h1>Stories</h1>
        <StoryCollection
          stories={this.state.storyCollection}
        />
      </div>
    )

  }
}


export default StoryIndex
