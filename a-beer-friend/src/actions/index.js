import axios from 'axios';
import { FETCH_USER } from './types';


//fetches current user
export const fetchUser = () => async dispatch => {
  console.log('getting user');
  const res = await axios.get('/api/current_user');
  console.log('getting user complete');

  dispatch({ type: FETCH_USER, payload: res.data });
};

//updates profile
export const submitProfile = (values, history) => async dispatch => {
  const res = await axios.post('/api/profile', values);

  history.push('/profile');
  dispatch({ type: FETCH_USER, payload: res.data });
};
