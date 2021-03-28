import {
  FetchUserRequest,
  FetchAllUsersRequest,
  FetchPeopleToFollow,
} from '../utils/api';

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_NEWPEOPLE_SUCCESS = 'FETCH_NEWPEOPLE_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';

export const successFetch = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const allUsersFetchSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const newPeopleToFollow = users => ({
  type: FETCH_NEWPEOPLE_SUCCESS,
  payload: users,
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

export const fetchAllUsers = () => async dispatch => {
  const method = 'get';
  const path = 'users';
  dispatch({ type: FETCH_USER_PENDING });
  try {
    const response = await FetchAllUsersRequest(method, path);
    console.log(response.data, 'users in the db');
    dispatch(allUsersFetchSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const peopleToFollow = id => async dispatch => {
  console.log('current guy id', id);
  const method = 'get';
  const path = `/users/${id}/users/${id}/nonfollow`;
  dispatch({ type: FETCH_USER_PENDING });
  try {
    const response = await FetchPeopleToFollow(method, path);
    console.log(response.data.length, 'user to follow length');
    dispatch(newPeopleToFollow(response.data));
  } catch (error) {
    console.log(error);
  }
};
