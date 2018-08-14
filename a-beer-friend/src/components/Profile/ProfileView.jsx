import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect }from "react-redux";
import avatar from "./assets/avatar.png";


class ProfileView extends Component {

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
          <div style={styles.profileInfoContainer}>
            <img style={styles.imageAvatar} src={avatar} alt="profile"/>
            <ul style={styles.profileDetails}>
              <li>Username: { userName ? userName : "Please provide a username" }</li>
              <li>First Name: {firstName ? firstName : "Please provide a First Name" }</li>
              <li>Last Name: {lastName ? lastName : "Please provide a Last Name" }</li>
              <li>E-mail: {email ? email : "Please provide an E-mail" }</li>
              <li>Town: {town ? town : "Please provide a Town" }</li>
              <li>State: {state ? state : "Please provide a State" }</li>
              <li>Zip Code: {zipCode ? zipCode : "Please provide a Zip Code" }</li>
            </ul>
            <div className="fixed-action-btn">
              <Link to="/user/profile/edit" className="red btn-flat white-text">
                Edit
              </Link>
            </div>
          </div>
        )
    }
  }

  render() {
    console.log('profile props: ', this.props);

    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

const styles = {
  imageAvatar: {
    width: '10%',
    height: '10%',
    borderRadius: '50px'
  },
  profileInfoContainer: {
    padding: '5rem',
    margin: '0 auto',
    textAlign: 'center'
  },
  profileDetails: {
    margin: '0 auto',
    width: '20%',
    padding: '1rem',
    border: '1px solid black',
    borderRadius: '15px',
    textAlign: 'left'
  }
};

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps, null) (ProfileView);