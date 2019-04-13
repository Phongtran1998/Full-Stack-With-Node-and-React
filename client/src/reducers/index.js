import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./authReducer";
import weapons from "./weaponsReducer";

export default combineReducers({
  form: formReducer,
  auth,
  weapons
});
