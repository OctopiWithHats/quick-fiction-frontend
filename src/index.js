import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import Login from './containers/Login'
import Profile from './components/Profile'
import NewStoryForm from './components/NewStoryForm'
import StoryCollection from './containers/StoryCollection'

import * as serviceWorker from './serviceWorker';


const Home = () => {
  return(
    <div>
      <App />
    </div>
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/stories" component={StoryCollection} />
      <Route exact path="/stories/new" component={NewStoryForm} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
)

//<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
