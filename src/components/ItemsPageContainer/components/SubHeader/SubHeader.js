import React from "react";
import styles from "./sub-header.module.scss";

// This contains the restaurant name and location
const SubHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="./restaurant-image.jpeg"
          alt="resturant"
          className={styles.image}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.name}>RESTAURANT</h2>
        <div>
          <h4 className={styles.cuisine}>Chinese, North Indian</h4>
          <h4 className={styles.location}>Bengaluru, Karnataka</h4>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
