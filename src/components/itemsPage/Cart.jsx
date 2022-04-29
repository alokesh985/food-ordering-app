import React from "react";
import styles from "../../styles/items-page/cart.module.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import CartBody from "../common/CartBody";

const Cart = () => {
  const cart = useSelector(selectCart);
  const items = Object.keys(cart);
  const numberOfItems = items.length;
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
          <CartBody />
          <Link to="/checkout">
            <button className={styles.checkoutButton}>CHECKOUT</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
