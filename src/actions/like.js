import { LikeAPost } from '../utils/api';
import { postsSuccessFetch } from './post';

export const LIKE_SUCCESS = 'LIKE_SUCCESS';
export const LIKE_FAILURE = 'LIKE_FAILURE';

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
