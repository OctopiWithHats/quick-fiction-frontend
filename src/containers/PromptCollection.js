import React from 'react'
import Prompt from '../components/Prompt'

class PromptCollection extends React.Component{

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     beginnings: this.props.beginnings,
  //     endings: this.props.endings
  //   }
  // }

  randomBeginning(){
    let beginningArray = this.props.beginnings
    //
    let randomIndex = Math.floor(Math.random() * beginningArray.length)
    //
    return beginningArray[randomIndex]
    // console.log(beginningArray[randomIndex])

  }

  randomEnding(){
    let endingArray = this.props.endings
    //
    let randomIndex = Math.floor(Math.random() * endingArray.length)
    //
    return endingArray[randomIndex]
    // console.log(beginningArray[randomIndex])

  }

  //render
  render(){
    console.log(this.props.beginnings)
    console.log("randomBeginning", this.randomBeginning())
    return(
      <div>
        <Prompt
          randomBeginning={this.randomBeginning()}
          randomEnding={this.randomEnding()}
        />
      </div>
    )
  }
}
export default PromptCollection
