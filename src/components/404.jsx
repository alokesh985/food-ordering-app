import React from "react";
import styles from "../styles/common/404.module.scss";
import Header from "./common/Header";
import { mainPageLinks } from "../constants/headerLinks";

const Page404 = () => {
  return (
    <div className={styles.container}>
      <Header headerLinks={mainPageLinks} />
      <div className={styles.bodyContainer}>
        <img src="./404.png" alt="404 not found" />
      </div>
    </div>
  );
};

export default Page404;
