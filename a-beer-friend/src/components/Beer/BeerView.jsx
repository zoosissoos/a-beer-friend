import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import * as actions from '../../actions';
import { connect }from "react-redux";

import BeerList from './BeerList';

class BeerView extends Component {

  renderContent() {
    switch (this.props.auth){
      case null:
        return 'Still deciding';
      case false:
        return (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        );
      default:
        const { firstName } = this.props.auth.userInfo;
        return (
          <div>
            <div style={styles.textContainer}>
              <p> Hello, {firstName ? firstName : "Guest."}. Here are your logged beers.</p>
              { <BeerList />}
            </div>
            <div className="fixed-action-btn">
              <Link to="/user/beers/add" className="red btn-flat white-text">
                Add a beer
              </Link>
            </div>
          </div>
        )
    }
  }

  render() {
    console.log('beer props: ', this.props);

    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

const styles = {
  textContainer: {
    padding: '3rem'
  }
};

export default connect(mapStateToProps, actions) (BeerView);