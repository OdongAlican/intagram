import {
  LikeAPost, DeleteAPostLike,
  bookmarkAPost,
  DeleteAPostBookmark,
} from '../utils/api';
import { postsSuccessFetch } from './post';

export const likeToPost = id => async dispatch => {
  const method = 'post';
  const path = `/posts/${id}/likes`;
  const data = {
    post_id: id,
  };
  try {
    const response = await LikeAPost(method, path, data);
    const dataList = JSON.parse(response.data.data);
    const list = response.data.followeesList;
    const result = { dataList, list };
    dispatch(postsSuccessFetch(result));
  } catch (error) {
    console.log(error);
  }
};

export const bookmarkToPost = id => async dispatch => {
  const method = 'post';
  const path = `/posts/${id}/bookmarks`;
  const data = {
    post_id: id,
  };
  try {
    const response = await bookmarkAPost(method, path, data);
    const dataList = JSON.parse(response.data.data);
    const list = response.data.followeesList;
    const result = { dataList, list };
    dispatch(postsSuccessFetch(result));
  } catch (error) {
    console.log(error);
  }
};

export const dislikeToPost = id => async dispatch => {
  console.log(id, 'inside data first');
  const method = 'delete';
  const path = `/likes/${id}`;
  try {
    const response = await DeleteAPostLike(method, path);
    const dataList = JSON.parse(response.data.data);
    const list = response.data.followeesList;
    const result = { dataList, list };
    dispatch(postsSuccessFetch(result));
  } catch (error) {
    console.log(error);
  }
};

export const disbookmarkToPost = id => async dispatch => {
  const method = 'delete';
  const path = `/bookmarks/${id}`;
  try {
    const response = await DeleteAPostBookmark(method, path);
    console.log(response, 'inside data');
    const dataList = JSON.parse(response.data.data);
    const list = response.data.followeesList;
    const result = { dataList, list };
    dispatch(postsSuccessFetch(result));
  } catch (error) {
    console.log(error);
  }
};
