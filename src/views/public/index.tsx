import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Help from './help';
import LogIn from './logIn';

class Public extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/public/login" component={LogIn} />
        <Route path="/public/help" component={Help} />
        <Redirect to="/public/help" />
      </Switch>
    );
  }
}

export default Public;
