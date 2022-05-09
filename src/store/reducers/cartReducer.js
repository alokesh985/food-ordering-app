import { ACTION_TYPES } from "../../constants/actionTypes";
import produce from "immer";

const initialState = {
  cart: [],
  cartAmount: 0,
};

const cartReducer = produce((draftState = initialState, action) => {
  const { type, payload } = action;
  const objectToChange = draftState.cart.find(
    (element) => element.itemName === payload.itemName
  );

  switch (type) {
    case ACTION_TYPES.INCREMENT_ITEM_IN_CART:
      if (!objectToChange)
        draftState.cart.push({ itemName: payload.itemName, quantity: 1 });
      else objectToChange.quantity += 1;
      return draftState;

    case ACTION_TYPES.DECREMENT_ITEM_IN_CART:
      if (objectToChange.quantity === 1)
        draftState.cart = draftState.cart.filter(
          (element) => element.itemName !== payload.itemName
        );
      else objectToChange.quantity -= 1;
      return draftState;

    case ACTION_TYPES.SET_TOTAL_CART_AMOUNT:
      draftState.cartAmount = payload.cartAmount;
      return draftState;

    default:
      return draftState;
  }
});

export default cartReducer;
