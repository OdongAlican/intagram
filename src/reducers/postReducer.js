import { FETCH_POSTS_SUCCESS } from '../actions/post';

const initialState = {
  posts: [],
  followeeList: [],
  error: '',
  loading: false,
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
    default:
      return state;
  }
};

export default postReducer;
