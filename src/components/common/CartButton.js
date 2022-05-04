import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  incrementItemInCart,
  decrementItemInCart,
  removeItemFromCart,
} from "../../store/actions/cartActions";
import styles from "./cart-button.module.scss";

// Button that shows next to each item present in the cart
const CartButton = ({ itemID, qty }) => {
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(incrementItemInCart(itemID));
  const handleRemove = () => {
    if (qty === 1) dispatch(removeItemFromCart(itemID));
    else dispatch(decrementItemInCart(itemID));
  };

  return (
    <div className={styles.container}>
      <button onClick={handleRemove} className={styles.subtractButton}>
        -
      </button>
      {qty}
      <button onClick={handleAdd} className={styles.addButton}>
        +
      </button>
    </div>
  );
};

export default CartButton;
