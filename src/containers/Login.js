import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Profile from '../components/Profile'

const URL = 'http://localhost:3000/api/v1/users/sign_in'

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formSubmit = (e) =>{
      e.preventDefault()
      console.log(this.state)
      fetch(URL,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
      }).then(resp => resp.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            this.props.redirect('logged in')
              console.log('this is sign in data',data)
        })
  }//end of form submit

  componentDidMount = ()=> {
      if (!!localStorage.getItem('token')){
          this.props.redirect('logged in')
      } else{
          this.props.redirect('logged out')
      }
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default Login;
