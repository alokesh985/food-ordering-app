import React, { useCallback } from "react";
import styles from "./cart-body.module.scss";
import { useSelector } from "react-redux";
import CartButton from "../CartButton";
import Loader from "../Loader";
import { isEmpty } from "lodash";

// Common component that shows the items in the cart and the total amount
const CartBody = ({ foodItems }) => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const quantities = useSelector((state) => state.cartReducer.quantities);

  const calculateTotal = useCallback(() => {
    let total = 0;
    for (let element of cart) {
      total += element.price * quantities[element.itemID];
    }
    return total;
  }, [cart, quantities]);

  const renderCartItems = useCallback(() => {
    return cart.map((element, idx) => {
      return (
        <div key={idx} className={styles.cartItem}>
          {isEmpty(foodItems) ? (
            <Loader height="35" width="35" type="small" />
          ) : (
            <h4 className={styles.itemName}>{foodItems[element.itemID]}</h4>
          )}
          <CartButton
            qty={quantities[element.itemID]}
            itemID={element.itemID}
          />
          <h3 className={styles.price}>{`₹ ${
            quantities[element.itemID] * element.price
          }`}</h3>
        </div>
      );
    });
  }, [cart, quantities]);

  return (
    <React.Fragment>
      <div className={styles.cartItemDetails}>{renderCartItems()}</div>
      <h1>{`TOTAL: ₹ ${calculateTotal()}`}</h1>
    </React.Fragment>
  );
};

export default CartBody;
