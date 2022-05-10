import React from "react";
import styles from "./add-button.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementItemInCart,
  decrementItemInCart,
} from "../../actions/cart.actionCreator";
import { getCartQuantites } from "../../../store/reducers/selectors/cartSelectors.selector";
import { compose } from "recompose";

const handleAdd = (dispatch, itemName) => () => {
  compose(dispatch, incrementItemInCart)({ itemName });
};

const handleRemove = (dispatch, itemName) => () => {
  compose(dispatch, decrementItemInCart)({ itemName });
};

const renderAddButton = (dispatch, itemName) => {
  return (
    <button
      className={styles.addButton}
      onClick={handleAdd(dispatch, itemName)}
    >
      ADD
    </button>
  );
};

const renderChangeQtyButton = (dispatch, quantities, itemName) => {
  return (
    <div className={styles.incrementDecrementButton}>
      <button
        className={styles.decrementButton}
        onClick={handleRemove(dispatch, itemName)}
      >
        -
      </button>
      {quantities[itemName]}
      <button
        className={styles.incrementButton}
        onClick={handleAdd(dispatch, itemName)}
      >
        +
      </button>
    </div>
  );
};

// Button on right of each item in the menu
const AddButton = ({ itemName }) => {
  const quantities = useSelector(getCartQuantites);
  const dispatch = useDispatch();

  return (
    <div className={styles.buttonContainer}>
      {!quantities[itemName]
        ? renderAddButton(dispatch, itemName)
        : renderChangeQtyButton(dispatch, quantities, itemName)}
    </div>
  );
};

export default AddButton;
