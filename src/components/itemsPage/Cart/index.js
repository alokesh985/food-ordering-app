import React from "react";
import styles from "./cart.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartBody } from "../../common";
import { isEmpty } from "lodash";

// Bottom right most component of the main page that shows contents of the cart
const Cart = ({ foodItems }) => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const itemsInCart = Object.keys(cart).length;

  const renderCartItems = () => {
    return (
      <div className={styles.cartContents}>
        <h1>CART</h1>
        <h3>{`${itemsInCart} ${itemsInCart === 1 ? "ITEM" : "ITEMS"}`}</h3>
        <CartBody foodItems={foodItems} />
        <Link to="/checkout">
          <button className={styles.checkoutButton}>CHECKOUT</button>
        </Link>
      </div>
    );
  };

  const renderEmptyCart = () => {
    return <h1 className={styles.cartEmptyText}>Cart Empty</h1>;
  };

  return (
    <div className={styles.container}>
      {isEmpty(cart) ? renderEmptyCart() : renderCartItems()}
    </div>
  );
};

export default Cart;
