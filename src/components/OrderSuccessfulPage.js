import React from "react";
import { Header } from "./common";
import styles from "./common/order-success-page.module.scss";
import { MAIN_PAGE_LINKS } from "../constants/headerLinks";

// Simple page when order is successfully placed
const OrderSuccessfulPage = () => {
  return (
    <div className={styles.container}>
      <Header headerLinks={MAIN_PAGE_LINKS} />
      <div className={styles.bodyContainer}>
        <div className={styles.imageContainer}>
          <img
            src="./order-successful.jpeg"
            alt="success"
            className={styles.successImage}
          />
        </div>
        <h1 className={styles.successText}>ORDER SUCCESSFUL!</h1>
      </div>
    </div>
  );
};

export default OrderSuccessfulPage;
