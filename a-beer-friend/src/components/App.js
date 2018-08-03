import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

import Landing from './Landing/Landing'
import Nav from './Nav'
import Dashboard from './Dashboard';
import ProfileView from './Profile/ProfileView'

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <Nav />
            <Route exact path="/" component={Landing} />
            <Route exact path="/user/profile" component={ProfileView} />
            <Route exact path="/user/dashboard" component={Dashboard} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}



export default connect(null, actions)(App);
