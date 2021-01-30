import { FetchPostRequest } from '../utils/api';

export const FETCH_POSTS_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const FETCH_POST_PENDING = 'FETCH_POST_PENDING';

export const postsSuccessFetch = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPosts = () => async dispatch => {
  const method = 'get';
  const path = 'posts';

  try {
    const response = await FetchPostRequest(method, path);
    console.log(response.data, 'posts list');
    dispatch(response.data);
  } catch (error) {
    console.log(error);
  }
};
