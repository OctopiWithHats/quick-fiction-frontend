import React from 'react'
import StoryCollection from './StoryCollection'
import NewStoryForm from '../components/NewStoryForm'
//import PromptIndex from './PromptIndex'

const API = 'http://localhost:3000/stories'

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
    fetch(API)
      .then(response => response.json())
      .then(stories => this.setState({
        storyCollection: stories
      })
    )
    console.log(this.state.storyCollection)
  }
  //add new story
  addStory = story => {
    console.log(this.state.storyCollection)
    console.log(story)
    this.setState({
      storyCollection: [...this.state.storyCollection, story]
    })
  }

  //render
  render(){
    console.log(this.state.storyCollection)

    return(
      <div
        style={{
          width: '100%',
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            textShadow: '2px 2px #E2E4F6',
            textDecoration: 'underline overline dotted red',
            fontVariant: 'small-caps',
            fontSize: '50px'
          }}
        >
          Quick Fiction
        </h1>

        <NewStoryForm
          addStory={this.addStory}
        />
        <StoryCollection
          stories={this.state.storyCollection}
        />
      </div>
    )

  }
}


export default StoryIndex
