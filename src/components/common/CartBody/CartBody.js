import React from "react";
import styles from "./cart-body.module.scss";
import { useSelector } from "react-redux";
import CartButton from "../CartButton/CartButton";
import Loader from "../Loader/Loader";
import { isEmpty } from "lodash";

const calculateTotal = (cart, quantities) => {
  let total = 0;
  for (let element of cart) {
    total += element.price * quantities[element.itemID];
  }
  return total;
};

const renderCartItems = (cart, foodItems, quantities) => {
  return cart.map((element, idx) => {
    return (
      <div key={idx} className={styles.cartItem}>
        {isEmpty(foodItems) ? (
          <Loader height="35" width="35" type="small" />
        ) : (
          <h4 className={styles.itemName}>{foodItems[element.itemID]}</h4>
        )}
        <CartButton qty={quantities[element.itemID]} itemID={element.itemID} />
        <h3 className={styles.price}>{`₹ ${
          quantities[element.itemID] * element.price
        }`}</h3>
      </div>
    );
  });
};

// Common component that shows the items in the cart and the total amount
const CartBody = ({ foodItems }) => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const quantities = useSelector((state) => state.cartReducer.quantities);

  return (
    <React.Fragment>
      <div className={styles.cartItemDetails}>
        {renderCartItems(cart, foodItems, quantities)}
      </div>
      <h1>{`TOTAL: ₹ ${calculateTotal(cart, quantities)}`}</h1>
    </React.Fragment>
  );
};

export default CartBody;
