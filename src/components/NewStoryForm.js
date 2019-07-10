import React from 'react'
import { Form } from 'semantic-ui-react'
import PromptIndex from '../containers/PromptIndex'

import Timer from './Timer'

class NewStoryForm extends React.Component {
  constructor(props) {
    super(props)

    //this.state = this.getInitialState()
    this.state = {
      author: 'anonymous',
      text: '',
      isReadOnly: false,
      backgroundColor: 'white',
      textColor: 'red'
    }
  }

  //assigning initial state outside constructor (sort of) allows to access in different places
  getInitialState = (props) => ({
    author: 'anonymous',
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
    const {text, author} = this.state
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
          author: `${author}`,
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
    //console.log("author state", this.state.author)
    const {text, author} = this.state
    return (
      <div>
      <div
        style={{
          position: 'absolute',
          left: '50px',
          width: '33%',
          height: '180px',
          border: '5px solid black',
          background: '#B298DC'
        }}
      >
        <h1
          style={{
            position: 'absolute',
            left: '35%',
            padding: '0px',
            margin: '5px',
            alignment: 'center'
          }}
        >Prompt:</h1>
        <div
          style={{
            position: 'relative',
            left: '33%',
            top: '30%'
          }}
        >
          <PromptIndex />
        </div>
        <button
          onClick={this.reloadPage}
          style={{
            position: 'absolute',
            left: '40%',
            top: '75%'
          }}
        >
          New Prompt
        </button>
      </div>
        <div
          style={{
            position: 'absolute',
            left: '42%',
            width: '15%',
            height: '180px',
            border: '5px solid black',
            background: '#B298DC'
          }}
        >
          <Timer />
        </div>


        <div
          style={{
            position: 'absolute',
            right: '50px',
            width: '33%',
            height: '180px',
            border: '5px solid black',
            background: '#B298DC'
          }}
        >
          <h2 style={{margin:'0 10px 10px'}}>Write your story here!</h2>
          <Form
            onSubmit={this.handleSubmit}
          >
            <h3 style={{margin: '0 10px 10px'}}>Author:</h3>
            <Form.Input
              style={{
                position: 'relative',
                top: '-30px',
                left: '85px',
              }}
              readOnly={false}
              placeholder="Anonymous"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
            <Form.TextArea
              id="textBox"
              style={{
                position: 'relative',
                width: '445px',
                left: '10px',
                top: '-10px',
                background: this.state.backgroundColor,
                color: this.state.textColor,
                overflow: 'scroll'
              }}
              readOnly={this.state.isReadOnly}
              label=""
              placeholder="Write your story here"
              name="text"
              value={text}
              onChange={this.handleChange}
            />
            <Form.Button
              onClick={this.reloadPage}
              style={{
                position: 'relative',
                right: '-5%',
              }}
            >
              Submit
            </Form.Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default NewStoryForm
