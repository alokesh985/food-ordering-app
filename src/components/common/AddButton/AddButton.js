import React from "react";
import styles from "./add-button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  insertItemIntoCart,
  removeItemFromCart,
  incrementItemInCart,
  decrementItemInCart,
} from "../../../store/actions/cartActions";

const handleAdd = (dispatch, quantities, itemID, price) => {
  if (!quantities[itemID])
    dispatch(
      insertItemIntoCart({
        itemID,
        price,
      })
    );
  else dispatch(incrementItemInCart(itemID));
};

const handleRemove = (dispatch, quantities, itemID) => {
  if (quantities[itemID] && quantities[itemID] > 1)
    dispatch(decrementItemInCart(itemID));
  else dispatch(removeItemFromCart(itemID));
};

const renderAddButton = (dispatch, quantities, itemID, price) => {
  return (
    <button
      className={styles.addButton}
      onClick={() => handleAdd(dispatch, quantities, itemID, price)}
    >
      ADD
    </button>
  );
};

const renderChangeQtyButton = (dispatch, quantities, itemID, price) => {
  return (
    <div className={styles.incrementDecrementButton}>
      <button
        className={styles.decrementButton}
        onClick={() => handleRemove(dispatch, quantities, itemID)}
      >
        -
      </button>
      {quantities[itemID]}
      <button
        className={styles.incrementButton}
        onClick={() => handleAdd(dispatch, quantities, itemID, price)}
      >
        +
      </button>
    </div>
  );
};

// Button on right of each item in the menu
const AddButton = ({ itemID, price }) => {
  const quantities = useSelector((state) => state.cartReducer.quantities);
  const dispatch = useDispatch();

  return (
    <div className={styles.buttonContainer}>
      {!quantities[itemID]
        ? renderAddButton(dispatch, quantities, itemID, price)
        : renderChangeQtyButton(dispatch, quantities, itemID, price)}
    </div>
  );
};

export default AddButton;
