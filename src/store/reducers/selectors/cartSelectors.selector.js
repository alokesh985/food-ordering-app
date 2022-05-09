import { createSelector } from "reselect";

export const getCartQuantites = createSelector(
  (state) => state.cartReducer.cart,
  (cart) => {
    const quantites = {};
    for (const item of cart) {
      quantites[item.itemName] = item.quantity;
    }
    return quantites;
  }
);
