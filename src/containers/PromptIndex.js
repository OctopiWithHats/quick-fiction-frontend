import React from 'react'
import Prompt from '../components/Prompt'
//import NewStoryForm from '../components/NewStoryForm'

const beginningsAPI = 'http://localhost:3000/beginnings'
const endingsAPI = 'http://localhost:3000/endings'

class PromptIndex extends React.Component{
  //constructor
  constructor(){
    super()
    this.state = {
      beginning: {},
      ending: {}
    }
  }

  //fetch stories in componentDidMount
  componentDidMount(){
    fetch(beginningsAPI)
      .then(response => response.json())
      .then(beginnings => {

        //console.log("beginnings", beginnings)

        let randomIndex = Math.floor(Math.random() * beginnings.length)
        //console.log("random index", randomIndex)
        this.setState({
          beginning: beginnings[randomIndex]
        })
      }
    )

    fetch(endingsAPI)
      .then(response => response.json())
      .then(endings => {
        let randomIndex = Math.floor(Math.random() * endings.length)
        this.setState({
          ending: endings[randomIndex]
        })
      }
    )
  }

  // randomBeginning(){
  //   let beginningArray = this.props.beginnings
  //   //
  //   let randomIndex = Math.floor(Math.random() * beginningArray.length)
  //   //
  //   return beginningArray[randomIndex]
  //   // console.log(beginningArray[randomIndex])
  //
  // }

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

    console.log(this.state)

    return(
      <div>
        <Prompt
          beginning={this.state.beginning}
          ending={this.state.ending}
          handleChange={this.props.handleChange}
        />

      </div>
    )

  }
}


export default PromptIndex
