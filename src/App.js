import React, { Component } from 'react';

import {
  Login,
  Main,
  Settings
} from './pages';

import {
  Button,
  Card,
  CardSection
} from './components';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export class App extends Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}


export default App;


