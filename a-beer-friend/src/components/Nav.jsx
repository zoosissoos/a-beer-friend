import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Nav extends Component {

  renderContent() {
    switch (this.props.auth){
      case null:
        return 'Still deciding';
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="1"><a href="/user/beers">Beers</a></li>,
          <li key="2"><a href="/user/profile">Profile</a></li>,
          <li key="3"><a href="/user/dashboard">Dashboard</a></li>,
          <li key="4"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render(){
    console.log('header props: ', this.props);
    return(
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
          >
            A Beer Friend
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps, null) (Nav);