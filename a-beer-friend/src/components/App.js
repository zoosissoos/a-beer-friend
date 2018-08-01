import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

import Landing from './Landing'
import Nav from './Nav'
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Nav />
        <Dashboard />
      </div>
    );
  }
}

export default App;
