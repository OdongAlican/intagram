import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions';

const initialState = {
  authenticated: false,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        error: '',
      };
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        error: '',
      };
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
