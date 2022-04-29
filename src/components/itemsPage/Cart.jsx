import React from "react";
import styles from "../../styles/cart.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartSlice";
import CartButton from "../common/CartButton";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(selectCart);
  const items = Object.keys(cart);
  const numberOfItems = items.length;
  const calculateTotal = () => {
    let total = 0;
    for (let element of items) {
      total += cart[element].qty * cart[element].price;
    }
    return total;
  };

  return (
    <div className={styles.container}>
      {Object.keys(cart).length === 0 ? (
        <h1 className={styles.cartEmptyText}>Cart Empty</h1>
      ) : (
        <div className={styles.cartContents}>
          <h1>CART</h1>
          <h3>{`${numberOfItems} ${
            numberOfItems === 1 ? "ITEM" : "ITEMS"
          }`}</h3>
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
          <Link to="/checkout">
            <button className={styles.checkoutButton}>CHECKOUT</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
