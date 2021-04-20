import { FETCH_POSTS_SUCCESS, FETCH_SINGLE_POST_SUCCESS } from '../actions/post';

const initialState = {
  posts: [],
  followeeList: [],
  error: '',
  loading: false,
  postDetails: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.dataList,
        followeeList: action.payload.list,
        error: '',
      };
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        posts: [],
        followeeList: [],
        postDetails: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
