import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementItemInCart,
  decrementItemInCart,
  removeItemFromCart,
} from "../../../store/actions/cartActions";
import styles from "./cart-button.module.scss";

const handleAdd = (dispatch, itemID) => dispatch(incrementItemInCart(itemID));

const handleRemove = (dispatch, itemID, qty) => {
  if (qty === 1) dispatch(removeItemFromCart(itemID));
  else dispatch(decrementItemInCart(itemID));
};

// Button that shows next to each item present in the cart
const CartButton = ({ itemID, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleRemove(dispatch, itemID, qty)}
        className={styles.subtractButton}
      >
        -
      </button>
      {qty}
      <button
        onClick={() => handleAdd(dispatch, itemID)}
        className={styles.addButton}
      >
        +
      </button>
    </div>
  );
};

export default CartButton;
