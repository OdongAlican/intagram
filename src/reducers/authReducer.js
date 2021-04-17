import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions';

const initialState = {
  authenticated: false,
  error: '',
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        error: '',
        token: action.payload,
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        error: '',
        token: '',
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
        token: '',
      };
    default:
      return state;
  }
};

export default authReducer;
