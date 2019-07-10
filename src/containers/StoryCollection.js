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
          position: 'absolute',
          bottom: '0px',
          width: '93%',
          height: '350px',
          overflow: 'scroll'
        }}
      >
        <Card.Group itemsPerRow={3}>
          {this.props.stories.map(story => (
            <Story
              key={story.id}
              story={story}
              addLike={this.addLike}
            />
          ))}
        </Card.Group>
      </div>
    )
  }
}
export default StoryCollection
