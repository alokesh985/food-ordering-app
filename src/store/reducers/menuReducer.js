import { ACTION_TYPES } from "../../constants/actionTypes";
import produce from "immer";

const initialState = {
  selectedCuisineID: "RECOMMENDED",
  cuisines: [],
  foodItems: [],
};

const menuReducer = produce((draftState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.CHANGE_CUISINE:
      draftState.selectedCuisineID = payload.cuisineID;
      return draftState;

    case ACTION_TYPES.SAVE_MENU_DATA:
      draftState.cuisines = payload.cuisines;
      draftState.foodItems = payload.foodItems;
      return draftState;

    default:
      return draftState;
  }
});

export default menuReducer;
