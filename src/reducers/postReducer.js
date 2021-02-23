import { FETCH_POSTS_SUCCESS } from '../actions/post';

const initialState = {
  posts: [],
  error: '',
  loading: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: '',
      };
    default:
      return state;
  }
};

export default postReducer;
