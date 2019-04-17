import {
  AUTH_SIGNUP,
  AUTH_ERROR_SIGNIN,
  AUTH_ERROR_SIGNUP,
  FETCH_USER,
  FETCH_WEAPONS,
  CREATE_WEAPON,
  EDIT_WEAPON
} from "./type";
import axios from "axios";

export const signUp = (newUser, callback) => async dispatch => {
  try {
    const res = await axios.post("/auth/emailsignup", {
      ...newUser
    });
    dispatch({ type: AUTH_SIGNUP, payload: res.data });
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR_SIGNUP, payload: "Email is already in used" });
  }
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const signIn = (user, callback) => async dispatch => {
  try {
    const res = await axios.post("/auth/emailsignin", {
      ...user
    });
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (e) {
    dispatch({ type: AUTH_ERROR_SIGNIN, payload: "Wrong email or password" });
  }
};

export const fetchWeapons = () => async dispatch => {
  const res = await axios.get("/api/weapons");
  return dispatch({ type: FETCH_WEAPONS, payload: res.data });
};

export const createWeapon = (weapon, callback) => async dispatch => {
  const res = await axios.post("/api/weapons", { ...weapon });
  dispatch({ type: CREATE_WEAPON, payload: res.data });
  callback();
};

export const editWeapon = (weapon, callback) => async dispatch => {
  const res = axios.put(`/api/weapons/${weapon._id}`, { ...weapon });
  dispatch({ type: EDIT_WEAPON, payload: res.data });
  callback();
};
