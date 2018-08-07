import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import beerReducer from './beerReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  beers: beerReducer
});