import React from 'react'
import { Form } from 'semantic-ui-react'
import PromptIndex from '../containers/PromptIndex'

import Timer from './Timer'

// const beginningAPI = 'http://localhost:3000/beginnings'
// const endingAPI = 'http://localhost:3000/endings'

class NewStoryForm extends React.Component {
  constructor(props) {
    super(props)

    //this.state = this.getInitialState()
    this.state = {
      text: '',
      isReadOnly: false,
      backgroundColor: 'white',
      textColor: 'red'
    }
  }

  //assigning initial state outside constructor (sort of) allows to access in different places
  getInitialState = (props) => ({
    //prompt: '',
    //beginning: this.props.beginning,
    //ending: this.props.ending,
    text: '',
    isReadOnly: false
  })

  //handle change
  handleChange = (event, {name, value}) => {
    this.setState({
      [name]: value
    })
    let timeUp = document.getElementById("timeUp")

    if(timeUp){
      console.log("timeUp is active")
      this.setState({
        isReadOnly: true
      })
    }
  }

  // handleInteract = () => {
  //   let timeUp = document.getElementById("timeUp")
  //   let textBox = document.getElementById("textBox")
  //   if(timeUp){
  //     console.log("readable?", this.state.isReadOnly)
  //     this.setState({
  //       isReadOnly: true
  //     })
  //   }
  //   console.log("read only?", this.state.isReadOnly)
  // }

  //handle submit
  handleSubmit = event => {
    let timeUp = document.getElementById("timeUp")

    if(timeUp){
      console.log("timeUp is active")
    }
    //don't forget to prevent default for forms
    //debugger
    event.preventDefault()
    //set const for state for easier value access
    const {text} = this.state
    const prompt = document.getElementById("prompt").textContent
    //fetch request method post
    fetch('http://localhost:3000/stories', {
      //method post
      method: 'POST',
      //set headers
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      //set body, stringify JSON
      body: JSON.stringify({
        story: {
          beginning_id: 1,
          ending_id: 1,
          text: `${prompt}: ${this.state.text}`,
          likes: 0
        }
      })
    })
    .then(response => response.json())
    .then(story => this.props.addStory(story))
    //reset state
    this.setState(this.getInitialState())
  }

  reloadPage = event => {
    //let location = 'http://localhost:3000/stories'
    window.location.reload(true)
  }

  render() {
    //set some abstract consts here for access
    //console.log("new story state", this.state)
    const {text} = this.state
    return (
      <div>
        <h3>Write a new story!</h3>

        <div>
        </div>
        <Form
          onSubmit={this.handleSubmit}
        >
          <Timer />
          <PromptIndex />
          <Form.Group widths="equal">
            <Form.TextArea
              id="textBox"
              style={
                {background: this.state.backgroundColor},
                {color: this.state.textColor}
              }
              readOnly={this.state.isReadOnly}
              label=""
              placeholder="Write your story here"
              name="text"
              value={text}
              onChange={this.handleChange}
            />


          </Form.Group>
          <Form.Button
            onClick={this.reloadPage}
          >
            Submit
          </Form.Button>
        </Form>
      </div>
    )
  }
}

export default NewStoryForm
