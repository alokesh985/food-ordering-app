import { ACTION_TYPES } from "../../constants/actionTypes";
import { createAction } from "redux-actions";

export const incrementItemInCart = createAction(
  ACTION_TYPES.INCREMENT_ITEM_IN_CART
);

export const decrementItemInCart = createAction(
  ACTION_TYPES.DECREMENT_ITEM_IN_CART
);
