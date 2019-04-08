import { AUTH_SIGNUP, AUTH_ERROR } from "./type";
import axios from "axios";

export const signUp = (newUser, callback) => async dispatch => {
  try {
    const res = await axios.post("/emailsignup", {
      ...newUser
    });
    dispatch({ type: AUTH_SIGNUP, payload: res.data });
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email is already in" });
  }
};
