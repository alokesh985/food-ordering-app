import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementItemInCart,
  decrementItemInCart,
} from "../../actions/cart.actionCreator";
import styles from "./cart-button.module.scss";
import { compose } from "recompose";

const handleAdd = (dispatch, itemName) =>
  compose(dispatch, incrementItemInCart)({ itemName });

const handleRemove = (dispatch, itemName) => {
  compose(dispatch, decrementItemInCart)({ itemName });
};

// Button that shows next to each item present in the cart
const CartButton = ({ itemName, qty }) => {
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
        onClick={() => handleAdd(dispatch, itemName)}
        className={styles.addButton}
      >
        +
      </button>
    </div>
  );
};

export default CartButton;
