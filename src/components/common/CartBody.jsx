import React from "react";
import styles from "../../styles/common/cart-body.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartSlice";
import CartButton from "./CartButton";

const CartBody = () => {
  const cart = useSelector(selectCart);
  const items = Object.keys(cart);
  const calculateTotal = () => {
    let total = 0;
    for (let element of items) {
      total += cart[element].qty * cart[element].price;
    }
    return total;
  };
  return (
    <React.Fragment>
      <div className={styles.cartItemDetails}>
        {items.map((element, idx) => {
          return (
            <div key={idx} className={styles.cartItem}>
              <h4 className={styles.itemName}>{element}</h4>
              <CartButton qty={cart[element].qty} name={element} />
              <h3 className={styles.price}>{`₹ ${
                cart[element].qty * cart[element].price
              }`}</h3>
            </div>
          );
        })}
      </div>
      <h1>{`TOTAL: ₹ ${calculateTotal()}`}</h1>
    </React.Fragment>
  );
};

export default CartBody;
