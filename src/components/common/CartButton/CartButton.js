import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementItemInCart,
  decrementItemInCart,
} from "../../actions/cart.actionCreator";
import styles from "./cart-button.module.scss";

const handleAdd = (dispatch, itemName, price) =>
  dispatch(incrementItemInCart(itemName, price));

const handleRemove = (dispatch, itemName) => {
  dispatch(decrementItemInCart(itemName));
};

// Button that shows next to each item present in the cart
const CartButton = ({ itemName, qty, price }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleRemove(dispatch, itemName)}
        className={styles.subtractButton}
      >
        -
      </button>
      {qty}
      <button
        onClick={() => handleAdd(dispatch, itemName, price)}
        className={styles.addButton}
      >
        +
      </button>
    </div>
  );
};

export default CartButton;
