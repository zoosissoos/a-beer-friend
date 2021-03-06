import {Component} from "react";
import {Redirect} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import React from "react";

class Dashboard extends Component {

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
        return 'Logged in';
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

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps, null) (Dashboard);