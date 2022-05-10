import { ACTION_TYPES } from "../../constants/actionTypes";
import { createAction } from "redux-actions";

export const changeCuisine = createAction(ACTION_TYPES.CHANGE_CUISINE);

export const saveMenuData = createAction(ACTION_TYPES.SAVE_MENU_DATA);
