import React from 'react'
import Story from '../components/Story'

class StoryCollection extends React.Component{


  //render
  render(){
    console.log(this.props.stories)
    return(
      <div>
        <div>
          {this.props.stories.map(story => (
            <Story
              key={story.id}
              story={story}
            />
          ))}

        </div>

      </div>
    )
  }
}
export default StoryCollection
