import React, { Component } from 'react';
import './App.css';

import Main from './pages/main/Main';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';

import injectTapEventPlugin from 'react-tap-event-plugin';

import 'roboto-fontface/css/roboto/roboto-fontface.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Paper, BottomNavigation, BottomNavigationItem, FontIcon } from 'material-ui';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export class App extends Component {

  render() {


    return (
      <Router>
        <MuiThemeProvider>
          <div>

            <Route exact path="/" component={Main}/>
            <Route path="/settings" component={Settings} />
            <Route path="/login" component={Login}/>


            <Paper zDepth={1}>
              <BottomNavigation selectedIndex={0}>
                <Link to="/">
                  <BottomNavigationItem
                    label="Queue"
                    icon={<FontIcon className="material-icons">snooze</FontIcon>}
                    onTouchTap={() => { }}
                  />
                </Link>
                <Link to="/settings">
                  <BottomNavigationItem
                    label="Settings"
                    icon={<FontIcon className="material-icons">settings</FontIcon>}
                    onTouchTap={() => { }}
                  />
                </Link>
              </BottomNavigation>
            </Paper>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}


export default App;


