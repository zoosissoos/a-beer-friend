import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ProfileForm from './ProfileForm';
import ProfileReview from './ProfileView';


class ProfileEdit extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showFormReview){
      return (
        <ProfileReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <ProfileForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render () {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
};

export default reduxForm({
  form: 'profileForm'
})(ProfileEdit);