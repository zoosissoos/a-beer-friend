import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ProfileForm from './ProfileForm';
import ProfileReview from './ProfileReview';


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
        onProfileSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render () {
    return (
      <div style={styles.formContainer}>
        {this.renderContent()}
      </div>
    );
  }
}

const styles = {
  formContainer: {
    padding: '5rem',
    margin: '0 auto'
  }
};

export default reduxForm({
  form: 'profileForm'
})(ProfileEdit);