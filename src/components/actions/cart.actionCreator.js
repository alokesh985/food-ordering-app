import { ACTION_TYPES } from "../../constants/actionTypes";

export const incrementItemInCart = (itemName, itemPrice) => {
  return {
    type: ACTION_TYPES.INCREMENT_ITEM_IN_CART,
    payload: { itemName },
  };
};

export const decrementItemInCart = (itemName) => {
  return {
    type: ACTION_TYPES.DECREMENT_ITEM_IN_CART,
    payload: { itemName },
  };
};

export const setTotalCartAmount = (cartAmount) => {
  return {
    type: ACTION_TYPES.SET_TOTAL_CART_AMOUNT,
    payload: { cartAmount },
  };
};
