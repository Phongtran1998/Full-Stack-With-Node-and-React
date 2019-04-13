import { FETCH_WEAPONS, CREATE_WEAPON } from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEAPONS:
      return action.payload;
    case CREATE_WEAPON:
      return [...state, action.payload];
    default:
      return state;
  }
};
