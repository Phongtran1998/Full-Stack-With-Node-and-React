import { AUTH_SIGNUP, AUTH_ERROR } from "../actions/type";

const INITIAL_STATE = {
  newUser: {},
  authenticated: "",
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNUP:
      return { ...state, newUser: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
