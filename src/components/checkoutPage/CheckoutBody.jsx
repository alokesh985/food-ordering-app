import React from "react";
import styles from "../../styles/checkout-page/checkout-body.module.scss";
import CartBody from "../common/CartBody";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";

const CheckoutBody = () => {
  const cart = useSelector(selectCart);
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
        <div className={styles.cart}>
          <CartBody />
        </div>
        {Object.keys(cart).length > 0 && (
          <div className={styles.submitButtonContainer}>
            <Link to="/order-success">
              <button className={styles.submitButton}>PAY</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutBody;
