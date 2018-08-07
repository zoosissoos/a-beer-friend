import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import BeerField from './BeerField';
import formFields from './formFields';
import { connect } from "react-redux";

class BeerForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={BeerField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onBeerSubmit)}>
          {this.renderFields()}
          <Link to="/user/profile" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Review
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};


  _.each(formFields, ({ name }) => {
    if (!values[name]){
      errors[name] = 'You must provide a value!';
    }
  });

  return errors;
}



function mapStateToProps({ auth }){
  return { auth };
}

BeerForm = connect(
  mapStateToProps,
  null
)(BeerForm);

export default reduxForm({
  validate,
  form: 'beerForm',
  destroyOnUnmount: false
}) (BeerForm);