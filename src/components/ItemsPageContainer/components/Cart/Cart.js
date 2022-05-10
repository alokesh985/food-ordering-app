import React from "react";
import styles from "./cart.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartBody } from "../../../common";

const renderCartItems = (numberOfItemsInCart) => {
  return (
    <div className={styles.cartContents}>
      <h1>CART</h1>
      <h3>{`${numberOfItemsInCart} ${
        numberOfItemsInCart === 1 ? "ITEM" : "ITEMS"
      }`}</h3>
      <CartBody />
      <Link to="/checkout">
        <button className={styles.checkoutButton}>CHECKOUT</button>
      </Link>
    </div>
  );
};

const renderEmptyCart = () => {
  return <h1 className={styles.cartEmptyText}>Cart Empty</h1>;
};

// Bottom right most component of the main page that shows contents of the cart
const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const numberOfItemsInCart = cart.length;

  return (
    <div className={styles.container}>
      {numberOfItemsInCart === 0
        ? renderEmptyCart()
        : renderCartItems(numberOfItemsInCart)}
    </div>
  );
};

export default Cart;
