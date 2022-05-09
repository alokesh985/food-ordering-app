import { ACTION_TYPES } from "../../constants/actionTypes";

export const changeCuisine = (selectedCuisineID) => {
  return {
    type: ACTION_TYPES.CHANGE_CUISINE,
    payload: { selectedCuisineID },
  };
};

export const saveMenuData = ({ foodItems, cuisines }) => {
  return {
    type: ACTION_TYPES.SAVE_MENU_DATA,
    payload: {
      cuisines,
      foodItems,
    },
  };
};
