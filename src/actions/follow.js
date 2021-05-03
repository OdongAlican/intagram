import { FollowUser } from '../utils/api';
import { postsSuccessFetch } from './post';

export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const followAnotherUser = id => async dispatch => {
  const method = 'post';
  const path = `users/${id}/follow`;
  const { token } = localStorage;
  try {
    const response = await FollowUser(method, id, path, token);
    const dataList = JSON.parse(response.data.data);
    const list = response.data.followeesList;
    const result = { dataList, list };
    dispatch(postsSuccessFetch(result));
  } catch (error) {
    console.log(error);
  }
};
