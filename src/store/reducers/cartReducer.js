const initialState = {
  quantities: {},
  cart: [],
};

let newObj;
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INSERT_ITEM_INTO_CART":
      return {
        ...state,
        cart: [...state.cart, payload],
        quantities: { ...state.quantities, [payload.itemID]: 1 },
      };
    case "REMOVE_ITEM_FROM_CART":
      let newCart = [...state.cart];
      newCart = newCart.filter((item) => {
        return item.itemID !== payload;
      });
      newObj = { ...state.quantities };
      delete newObj[payload];
      return {
        cart: newCart,
        quantities: newObj,
      };
    case "INCREMENT_ITEM_IN_CART":
      newObj = { ...state.quantities };
      newObj[payload] = newObj[payload] + 1;
      return {
        ...state,
        quantities: newObj,
      };
    case "DECREMENT_ITEM_IN_CART":
      newObj = { ...state.quantities };
      newObj[payload] = newObj[payload] - 1;
      return {
        ...state,
        quantities: newObj,
      };
    default:
      return state;
  }
};

export default cartReducer;
