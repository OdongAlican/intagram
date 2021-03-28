import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_NEWPEOPLE_SUCCESS,
} from '../actions/user';

const initialState = {
  user: {},
  error: '',
  loading: false,
  users: [],
  newPeopleFollow: [],
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
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: '',
        loading: false,
      };
    case FETCH_NEWPEOPLE_SUCCESS:
      return {
        ...state,
        newPeopleFollow: action.payload,
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
