import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Test from './Test';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Test } />
      </Switch>
    );
  }
}

export default App;
