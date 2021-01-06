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

export const signUpAction = ({ username, password, email }, history) => async dispatch => {
  const path = 'users';
  const method = 'post';
  const data = { username, password, email };
  try {
    const response = await sendUnauthenticatedRequest(method, path, data);
    dispatch({ type: AUTHENTICATED });
    localStorage.setItem('user', response.data.token);
    console.log(response.data, 'successfully signed up');
    history.push('/home');
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: 'Invalid User credentials',
    });
  }
};
