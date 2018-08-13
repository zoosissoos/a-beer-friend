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
export const fetchBeer = () => async dispatch => {
  const res = await axios.get('/api/current_user/beer');
  console.log('fetch beer action', res.data)
  dispatch({ type: FETCH_BEER, payload: res.data });
};

//submits beer for current logged in user
export const submitBeer = (values, history) => async dispatch => {
  const res = await axios.post('/api/current_user/beer/add', values);

  history.push('/user/beers');
  dispatch({ type: FETCH_BEER, payload: res.data });
};

export const deleteBeer = (value, history) => async dispatch => {
  console.log('touched delete', value)
  const res = await axios.delete('/api/current_user/beer/delete', {
    data:{beerId: value}
  });

  console.log('delete beer action', res.data);
  dispatch({ type: FETCH_BEER, payload: res.data });
};
