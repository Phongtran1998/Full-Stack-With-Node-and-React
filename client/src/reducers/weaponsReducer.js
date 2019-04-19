import {
  FETCH_WEAPONS,
  CREATE_WEAPON,
  EDIT_WEAPON,
  DELETE_WEAPON
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEAPONS:
      return action.payload;
    case CREATE_WEAPON:
      return [...state, action.payload];
    case EDIT_WEAPON:
      return state.map(weapon => {
        if (weapon._id === action.payload._id) {
          return { ...weapon, ...action.payload };
        }
        return weapon;
      });
    case DELETE_WEAPON:
      return state.filter(weapon => {
        if (weapon._id === action.payload.id) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};
