import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect }from "react-redux";


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
        const { userName, firstName, lastName, email, town, state, zipCode } = this.props.auth.userInfo;
        return (
          <div>
            <div>
              <p> Hello, {firstName ? firstName : "Guest."}. Here are your logged beers.</p>
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

export default connect(mapStateToProps, null) (BeerView);