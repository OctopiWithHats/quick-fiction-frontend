import React from 'react'
import { Form } from 'semantic-ui-react'
import PromptIndex from '../containers/PromptIndex'

import Timer from './Timer'

// const beginningAPI = 'http://localhost:3000/beginnings'
// const endingAPI = 'http://localhost:3000/endings'

class NewStoryForm extends React.Component {
  constructor() {
    super()

    this.state = this.getInitialState()
  }

  //assigning initial state outside constructor (sort of) allows to access in different places
  getInitialState = () => ({
    prompt: '',
    author: '',
    text: ''
  })

  //handle change
  handleChange = (event, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  //handle submit
  handleSubmit = event => {
    //don't forget to prevent default for forms
    event.preventDefault()
    //set const for state for easier value access
    const {prompt, author, text} = this.state
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
        prompt,
        author,
        text
      })
    })
    .then(response => response.json())
    .then(story => this.props.addStory(story))
    //reset state
    this.setState(this.getInitialState())
  }

  render() {
    //set some abstract consts here for access
    const {prompt, author, text} = this.state
    return (
      <div>
        <Timer />
        <h3>Write a new story!</h3>
        <div>
          <PromptIndex />
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Button>Start!</Form.Button>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Author"
              placeholder="Who are you?"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
            <Form.TextArea

              label="text"
              placeholder="Write your story here"
              name="text"
              value={text}
              onChange={this.handleChange}
            />


          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default NewStoryForm
