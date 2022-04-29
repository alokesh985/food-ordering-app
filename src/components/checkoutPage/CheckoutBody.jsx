import React from "react";
import styles from "../../styles/checkout-page/checkout-body.module.scss";
import CartBody from "../common/CartBody";

const CheckoutBody = () => {
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
        <div className={styles.submitButtonContainer}>
          <button className={styles.submitButton}>PAY</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
