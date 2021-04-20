import { FetchPostRequest, FetchSinglePostRequest } from '../utils/api';

export const FETCH_POSTS_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const FETCH_POST_PENDING = 'FETCH_POST_PENDING';

export const postsSuccessFetch = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const singlePostSuccessFetch = post => ({
  type: FETCH_SINGLE_POST_SUCCESS,
  payload: post,
});

export const fetchPosts = token => async dispatch => {
  const method = 'get';
  const path = 'posts';
  try {
    const response = await FetchPostRequest(method, path, token);
    const dataList = JSON.parse(response.data.data);
    const list = response.data.followeesList;
    const result = { dataList, list };
    dispatch(postsSuccessFetch(result));
  } catch (error) {
    console.log(error);
  }
};

export const fetchSinglePost = (id, token) => async dispatch => {
  const method = 'get';
  const path = `/posts/${id}`;
  try {
    const response = await FetchSinglePostRequest(method, path, token);
    dispatch(singlePostSuccessFetch(response.data));
  } catch (error) {
    console.log(error);
  }
};
