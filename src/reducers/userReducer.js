import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_PENDING } from '../actions/user';

const initialState = {
  user: {},
  error: '',
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        user: {},
        error: '',
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: {},
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
