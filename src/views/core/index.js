import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Persons from './persons';
import CreatePerson from './createPerson';

class Core extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/persons" component={Persons} />
        <Route path="/create-person" component={CreatePerson} />
        <Redirect to="/persons" />
      </Switch>
    );
  }
}

export default Core;
