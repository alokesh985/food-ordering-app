import { ACTION_TYPES } from "../../constants/actionTypes";

const initialState = {
  selectedCuisineID: "RECOMMENDED",
  cuisines: [],
  foodItems: [],
};

const menuReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.CHANGE_CUISINE:
      return { ...state, selectedCuisineID: payload.selectedCuisineID };
    case ACTION_TYPES.SAVE_MENU_DATA:
      return {
        ...state,
        cuisines: payload.cuisines,
        foodItems: payload.foodItems,
      };
    default:
      return state;
  }
};

export default menuReducer;
