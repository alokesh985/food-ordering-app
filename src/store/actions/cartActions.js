export const insertItemIntoCart = ({ itemID, price }) => {
  return {
    type: "INSERT_ITEM_INTO_CART",
    payload: {
      itemID: itemID,
      price: price,
    },
  };
};

export const removeItemFromCart = (itemID) => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: itemID,
  };
};

export const incrementItemInCart = (itemID) => {
  return {
    type: "INCREMENT_ITEM_IN_CART",
    payload: itemID,
  };
};

export const decrementItemInCart = (itemID) => {
  return {
    type: "DECREMENT_ITEM_IN_CART",
    payload: itemID,
  };
};
