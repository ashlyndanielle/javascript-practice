import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Slider from './Carousel/Slider';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Slider } />
      </Switch>
    );
  }
}

export default App;
