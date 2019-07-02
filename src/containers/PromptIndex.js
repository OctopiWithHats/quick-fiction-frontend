import React from 'react'
import PromptCollection from './PromptCollection'
import Prompt from '../components/Prompt'

const beginningsAPI = 'http://localhost:3000/beginnings'
const endingsAPI = 'http://localhost:3000/endings'

class PromptIndex extends React.Component{
  //constructor
  constructor(){
    super()
    this.state = {
      beginnings: [],
      endings: []
    }
  }

  //fetch stories in componentDidMount
  componentDidMount(){
    fetch(beginningsAPI)
      .then(response => response.json())
      .then(beginnings => this.setState({
        beginnings: beginnings
      })
    )

    fetch(endingsAPI)
      .then(response => response.json())
      .then(endings => this.setState({
        endings: endings
      }))
  }



  //render
  render(){

    // console.log(this.state.beginnings)
    // console.log(this.state.endings)

    return(
      <div>
        <PromptCollection
          beginnings={this.state.beginnings}
          endings={this.state.endings}
        />
      </div>
    )

  }
}


export default PromptIndex
