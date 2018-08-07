import axios from 'axios';
import { FETCH_USER, FETCH_BEER } from './types';


//fetches current user
export const fetchUser = () => async dispatch => {
  console.log('getting user');
  const res = await axios.get('/api/current_user');
  console.log('getting user complete');

  dispatch({ type: FETCH_USER, payload: res.data });
};

//updates profile for current logged in user
export const submitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/profile/update', values);

  history.push('/user/profile');
  dispatch({ type: FETCH_USER, payload: res.data });
};

//fetches beer for current logged in user
export const fetchBeer = (values, history) => async dispatch => {
  const res = await axios.get('/api/current_user/beer', values);
  console.log(res.data)
  dispatch({ type: FETCH_BEER, payload: res.data });
};

//submits beer for current logged in user
export const submitBeer = (values, history) => async dispatch => {
  const res = await axios.post('/api/current_user/beer/add', values);

  history.push('/user/beers');
  dispatch({ type: FETCH_BEER, payload: res.data });
};
