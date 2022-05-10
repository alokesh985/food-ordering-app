import React from "react";
import styles from "./checkout-body.module.scss";
import { CartBody } from "../../../common";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

const renderCart = (foodItems) => {
  return (
    <React.Fragment>
      <div className={styles.cart}>
        <CartBody foodItems={foodItems} />
      </div>
      <div className={styles.submitButtonContainer}>
        <Link to="/order-success">
          <button className={styles.submitButton}>PAY</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const renderEmptyCart = () => {
  return <h1 className={styles.cartEmptyText}>Cart Empty</h1>;
};

const CheckoutBody = ({ foodItems }) => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <div className={styles.container}>
      <div className={styles.checkoutBox}>
        <div className={styles.restaurant}>
          <img
            src="./restaurant-image.jpeg"
            alt="resturant"
            className={styles.image}
          />
          <div className={styles.restaurantDetails}>
            <h1 className={styles.name}>RESTAURANT</h1>
            <h4 className={styles.cuisine}>Chinese, North Indian</h4>
            <h4 className={styles.location}>Bengaluru, Karnataka</h4>
          </div>
        </div>
        {isEmpty(cart) ? renderEmptyCart() : renderCart(foodItems)}
      </div>
    </div>
  );
};

export default CheckoutBody;
