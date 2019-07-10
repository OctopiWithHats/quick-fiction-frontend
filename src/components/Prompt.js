import React from 'react'
//import NewStoryForm from './NewStoryForm'
import { Form } from 'semantic-ui-react'


class Prompt extends React.Component{
  //constructor
  constructor(props){
    super(props)
    // this.state = {
    //   beginning: this.props.randomBeginning
    // }
  }

  renderCompletePrompt = () => {
    let complete = `${this.props.beginning.word} ${this.props.ending.word}`
    //console.log("complete from function", complete)
    return complete
  }

  render(){
    return(
      <div id="prompt"
        style={{
          padding: '0px'
        }}
      >
        <h2>{this.renderCompletePrompt()}</h2>
      </div>
    )
  }
}
export default Prompt
