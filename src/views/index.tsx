import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Public from './public';
import Core from './core';

class RTS extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/public" component={Public} />
          <Route path="/" component={Core} />
          <Redirect to="/public" />
        </Switch>
      </Router>
    );
  }
}

export default RTS;
