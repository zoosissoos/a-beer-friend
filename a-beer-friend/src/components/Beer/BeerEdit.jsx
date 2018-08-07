import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import BeerForm from './BeerForm';
import BeerFormReview from './BeerFormReview';


class BeerEdit extends Component {
  state = { showReview: false };

  renderContent() {
    if (this.state.showFormReview){
      return (
        <BeerFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <BeerForm
        onBeerSubmit={() => this.setState({ showFormReview: true })}
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
}

export default reduxForm({
  form: 'beerForm'
})(BeerEdit);