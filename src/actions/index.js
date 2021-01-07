/* eslint-disable camelcase */

import { sendUnauthenticatedRequest } from '../utils/api';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export const signInAction = ({ email, password }, history) => async dispatch => {
  const path = 'auth/login';
  const method = 'post';
  const data = { email, password };
  try {
    const response = await sendUnauthenticatedRequest(method, path, data);
    dispatch({ type: AUTHENTICATED });
    localStorage.setItem('user', response.data.token);
    history.push('/home');
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: 'Invalid email or Password',
    });
  }
};

export const signUpAction = ({
  name, email, password, password_confirmation,
}, history) => async dispatch => {
  const path = 'signup';
  const method = 'post';
  const data = {
    name, email, password, password_confirmation,
  };
  try {
    const response = await sendUnauthenticatedRequest(method, path, data);
    dispatch({ type: AUTHENTICATED });
    localStorage.setItem('user', response.data.auth_token);
    console.log(response.data.auth_token, 'successfully signed up');
    history.push('/home');
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: 'Invalid User credentials',
    });
  }
};
