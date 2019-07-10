import React from 'react';
//import ReactDOM from 'react-dom'
//import { BrowswerRouter as Router, Route } from 'react-router-dom'
//import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css';
//import Login from './containers/Login'
//import Profile from './components/Profile'
import NavBar from './containers/NavBar'
//import StoryIndex from './containers/StoryIndex'
//import Timer from './components/Timer'
//import PromptIndex from './containers/PromptIndex'


class App extends React.Component {

  render(){
    return(
      <div className="App">
        <NavBar />
      </div>
    )
  }
}

export default App;

// const App = props => {
//   console.log('%c APP Props: ', 'color: firebrick', props)
//   return (
//     <Fragment>
//       <NavBar />
//       <Switch>
//         <Route exact path="/" render={() => <Redirect to="/profile" />} />
//
//         <Route exact path="/profile" component={Profile} />
//         <Route exact path="/login" component={Login} />
//       </Switch>
//     </Fragment>
//   )
// }
//
// export default withRouter(App) //withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected
