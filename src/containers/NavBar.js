import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

class NavBar extends React.Component{

  //render
  render(){
    return(
      <div>

        <h1
          style={{
            width: '100%',
            padding: '12px',
            margin: '0 6px 6px',
            background: 'white',
            textDecoration: 'none',
            color: 'white'
          }}
        >

        </h1>
      </div>
    )
  }
}

export default NavBar
