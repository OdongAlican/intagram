import { FetchUserRequest } from '../utils/api';

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';

export const successFetch = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const failureFetch = error => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUser = id => async dispatch => {
  const method = 'get';
  const path = 'users';
  dispatch({ type: FETCH_USER_PENDING });
  try {
    const response = await FetchUserRequest(method, path, id);
    dispatch(successFetch(response.data));
  } catch (error) {
    dispatch(failureFetch(error));
  }
};
