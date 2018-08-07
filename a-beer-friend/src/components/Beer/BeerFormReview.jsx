import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const BeerFormReview = ({ onCancel, formValues, submitBeer, history }) => {

  const reviewFields = _.map(formFields, ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your details.</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitBeer(formValues, history)}
        className="green btn-flat white-text right"
      >
        Confirm Changes
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.beerForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(BeerFormReview));

