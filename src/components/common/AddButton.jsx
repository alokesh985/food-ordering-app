import React from "react";
import styles from "../../styles/common/add-button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  insertItem,
  deleteItem,
  incrementItem,
  decrementItem,
} from "../../store/slices/cartSlice";

const AddButton = (props) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const { currentItemName, currentItemPrice } = props;

  const handleAdd = () => {
    if (!cart[currentItemName])
      dispatch(insertItem({ currentItemName, currentItemPrice }));
    else dispatch(incrementItem(currentItemName));
  };

  const handleRemove = () => {
    if (cart[currentItemName] && cart[currentItemName].qty > 1)
      dispatch(decrementItem(currentItemName));
    else dispatch(deleteItem(currentItemName));
  };

  return (
    <div className={styles.buttonContainer}>
      {!cart[currentItemName] ? (
        <button className={styles.addButton} onClick={handleAdd}>
          ADD
        </button>
      ) : (
        <div className={styles.incrementDecrementButton}>
          <button className={styles.decrementButton} onClick={handleRemove}>
            -
          </button>
          {cart[currentItemName].qty}
          <button className={styles.incrementButton} onClick={handleAdd}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButton;
