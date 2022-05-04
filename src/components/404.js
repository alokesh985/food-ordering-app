import React from "react";
import styles from "./common/404.module.scss";
import { Header } from "./common";
import { MAIN_PAGE_LINKS } from "../constants/headerLinks";

// A simple 404 page
const Page404 = () => {
  return (
    <div className={styles.container}>
      <Header headerLinks={MAIN_PAGE_LINKS} />
      <div className={styles.bodyContainer}>
        <img src="./404.png" alt="404 not found" />
      </div>
    </div>
  );
};

export default Page404;
