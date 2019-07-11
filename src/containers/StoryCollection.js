import React from 'react'
import Story from '../components/Story'
import { Card } from 'semantic-ui-react'

class StoryCollection extends React.Component{

  // //add like
  // addLike = (story) => {
  //   console.log(this.story.likes)
  //   this.setState({
  //     likes: this.story.likes + 1
  //   })
  //   console.log(this.story.likes)
  // }

  //render
  render(){
    console.log(this.props.stories)
    return(
      <div
        style={{
          position: 'relative',
          top: '185px',
          left:'50px',
          width: '93%',
          height: '345px',
          overflow: 'scroll'
        }}
      >
        <Card.Group>
          {this.props.stories.map(story => (
            <Story
              key={story.id}
              story={story}
              addLike={this.addLike}
            />
          )).reverse()}
        </Card.Group>
      </div>
    )
  }
}
export default StoryCollection
