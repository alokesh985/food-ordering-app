import React, { useCallback } from "react";
import styles from "./add-button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  insertItemIntoCart,
  removeItemFromCart,
  incrementItemInCart,
  decrementItemInCart,
} from "../../../store/actions/cartActions";

// Button on right of each item in the menu
const AddButton = ({ itemID, price }) => {
  const quantities = useSelector((state) => state.cartReducer.quantities);
  const dispatch = useDispatch();

  const handleAdd = useCallback(() => {
    if (!quantities[itemID])
      dispatch(
        insertItemIntoCart({
          itemID,
          price,
        })
      );
    else dispatch(incrementItemInCart(itemID));
  }, [quantities, itemID]);

  const handleRemove = useCallback(() => {
    if (quantities[itemID] && quantities[itemID] > 1)
      dispatch(decrementItemInCart(itemID));
    else dispatch(removeItemFromCart(itemID));
  }, [quantities, itemID]);

  const renderAddButton = () => {
    return (
      <button className={styles.addButton} onClick={handleAdd}>
        ADD
      </button>
    );
  };

  const renderChangeQtyButton = () => {
    return (
      <div className={styles.incrementDecrementButton}>
        <button className={styles.decrementButton} onClick={handleRemove}>
          -
        </button>
        {quantities[itemID]}
        <button className={styles.incrementButton} onClick={handleAdd}>
          +
        </button>
      </div>
    );
  };

  return (
    <div className={styles.buttonContainer}>
      {!quantities[itemID] ? renderAddButton() : renderChangeQtyButton()}
    </div>
  );
};

export default AddButton;
