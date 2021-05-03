import { CommentOnPost } from '../utils/api';
import { postsSuccessFetch } from './post';

export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_FAILURE = 'COMMENT_FAILURE';

export const addCommentToPost = (content, id, token, post = null, history) => async dispatch => {
  const method = 'post';
  const path = `/posts/${id}/comments`;
  const data = {
    content,
    user_id: parseInt(localStorage.userId, 10),
    post_id: id,
  };
  try {
    const response = await CommentOnPost(method, path, data, token);
    const dataList = JSON.parse(response.data.data);
    const list = response.data.followeesList;
    const result = { dataList, list };
    dispatch(postsSuccessFetch(result));
    if (post !== null) {
      history.push(`/post/${id}`);
    }
  } catch (error) {
    console.log(error);
  }
};
