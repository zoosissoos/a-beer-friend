import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

import Landing from './Landing/Landing';
import Nav from './Nav';
import Dashboard from './Dashboard';
import BeerView from './Beer/BeerView';
import BeerEdit from './Beer/BeerEdit';
import ProfileView from './Profile/ProfileView';
import ProfileEdit from './Profile/ProfileEdit';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Nav style={{width: '100%'}}/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/user/dashboard" component={Dashboard} />

            {/*Beer routes*/}
            <Route exact path="/user/beers" component={BeerView} />
            <Route exact path="/user/beers/add" component={BeerEdit} />

            {/*Profile Routes*/}
            <Route exact path="/user/profile" component={ProfileView} />
            <Route exact path="/user/profile/edit" component={ProfileEdit} />
        </div>
      </BrowserRouter>
    );
  }
}



export default connect(null, actions)(App);
