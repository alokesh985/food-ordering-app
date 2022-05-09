import React from "react";
import styles from "./add-button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementItemInCart,
  decrementItemInCart,
} from "../../actions/cart.actionCreator";
import { getCartQuantites } from "../../../store/reducers/selectors/cartSelectors.selector";

const handleAdd = (dispatch, itemName, price) => {
  dispatch(incrementItemInCart(itemName, price));
};

const handleRemove = (dispatch, itemName) => {
  dispatch(decrementItemInCart(itemName));
};

const renderAddButton = (dispatch, itemName, price) => {
  return (
    <button
      className={styles.addButton}
      onClick={() => handleAdd(dispatch, itemName, price)}
    >
      ADD
    </button>
  );
};

const renderChangeQtyButton = (dispatch, quantities, itemName, price) => {
  return (
    <div className={styles.incrementDecrementButton}>
      <button
        className={styles.decrementButton}
        onClick={() => handleRemove(dispatch, itemName)}
      >
        -
      </button>
      {quantities[itemName]}
      <button
        className={styles.incrementButton}
        onClick={() => handleAdd(dispatch, itemName, price)}
      >
        +
      </button>
    </div>
  );
};

// Button on right of each item in the menu
const AddButton = ({ itemName, price }) => {
  const quantities = useSelector(getCartQuantites);
  const dispatch = useDispatch();

  return (
    <div className={styles.buttonContainer}>
      {!quantities[itemName]
        ? renderAddButton(dispatch, itemName, price)
        : renderChangeQtyButton(dispatch, quantities, itemName, price)}
    </div>
  );
};

export default AddButton;
