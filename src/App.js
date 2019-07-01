import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
//import { BrowswerRouter as Router, Route } from 'react-router-dom'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import './App.css';
import Login from './containers/Login'
import Profile from './components/Profile'
import NavBar from './containers/NavBar'
import StoryIndex from './containers/StoryIndex'


// class App extends React.Component {
//
//   login = ({ username, password }) => {
//     console.log(`Logging in ${username} with password ${password}`);
//   };
//
//   render(){
//     return(
//       <div className="App">
//         <Login handleLogin={this.login}/>
//       </div>
//     )
//   }
// }
//
// export default App;

const App = props => {
  console.log('%c APP Props: ', 'color: firebrick', props)
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
  )
}

export default withRouter(App) //withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected
