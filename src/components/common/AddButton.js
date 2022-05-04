import React from "react";
import styles from "./add-button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  insertItemIntoCart,
  removeItemFromCart,
  incrementItemInCart,
  decrementItemInCart,
} from "../../store/actions/cartActions";

// Button on right of each item in the menu
const AddButton = ({ itemID, price, idToNameMapping }) => {
  const quantities = useSelector((state) => state.cartReducer.quantities);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!quantities[itemID])
      dispatch(
        insertItemIntoCart({
          itemID,
          price,
        })
      );
    else dispatch(incrementItemInCart(itemID));
  };

  const handleRemove = () => {
    if (quantities[itemID] && quantities[itemID] > 1)
      dispatch(decrementItemInCart(itemID));
    else dispatch(removeItemFromCart(itemID));
  };

  return (
    <div className={styles.buttonContainer}>
      {!quantities[itemID] ? (
        <button className={styles.addButton} onClick={handleAdd}>
          ADD
        </button>
      ) : (
        <div className={styles.incrementDecrementButton}>
          <button className={styles.decrementButton} onClick={handleRemove}>
            -
          </button>
          {quantities[itemID]}
          <button className={styles.incrementButton} onClick={handleAdd}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddButton;
