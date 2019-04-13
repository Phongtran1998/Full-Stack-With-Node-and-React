import {
  AUTH_SIGNUP,
  AUTH_ERROR_SIGNIN,
  AUTH_ERROR_SIGNUP,
  FETCH_USER
} from "../actions/type";

const INITIAL_STATE = {
  newUser: {},
  authenticated: null,
  errorSignUp: "",
  errorSignIn: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      return { ...state, newUser: action.payload };
    case AUTH_ERROR_SIGNIN:
      return { ...state, errorSignIn: action.payload };
    case AUTH_ERROR_SIGNUP:
      return { ...state, errorSignUp: action.payload };
    case FETCH_USER:
      return { ...state, authenticated: action.payload || false };
    default:
      return state;
  }
};
