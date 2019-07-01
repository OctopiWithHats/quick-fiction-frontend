import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class NavBar extends React.Component{

  //render
  render(){
    return(
      <div>
        <NavLink
          to="/"
          exact
          style={{
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white'
          }}
          activeStyle={{
            background: 'darkblue'
          }}
        >
          Home
        </NavLink>

        <NavLink
          to="/profile"
          exact
          style={{
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white'
          }}
          activeStyle={{
            background: 'darkblue'
          }}
        >
          Profile
        </NavLink>

        <NavLink
          to="/stories/new"
          exact
          style={{
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white'
          }}
          activeStyle={{
            background: 'darkblue'
          }}
        >
          New Story
        </NavLink>
        
        <NavLink
          to="/stories"
          exact
          style={{
            width: '100px',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'blue',
            textDecoration: 'none',
            color: 'white'
          }}
          activeStyle={{
            background: 'darkblue'
          }}
        >
          Stories
        </NavLink>
      </div>
    )
  }
}

export default NavBar
