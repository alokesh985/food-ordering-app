import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  deleteItem,
} from "../../store/slices/cartSlice";
import styles from "../../styles/common/cart-button.module.scss";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { qty, name } = props;

  const handleAdd = () => dispatch(incrementItem(name));
  const handleRemove = () => {
    if (qty === 1) dispatch(deleteItem(name));
    else dispatch(decrementItem(name));
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
