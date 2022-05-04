import React from "react";
import { Header } from "../common";
import Restaurant from "./Restaurant";
import ItemCategories from "./ItemCategories";
import Menu from "./Menu";
import Cart from "./Cart";
import { mainPageLinks } from "../../constants/headerLinks";
import styles from "./items-page-container.module.scss";

const ItemsPageContainer = () => {
  return (
    <div>
      <Header headerLinks={mainPageLinks} />
      <Restaurant />
      <div className={styles.body}>
        <ItemCategories />
        <Menu />
        <Cart />
      </div>
    </div>
  );
};

export default ItemsPageContainer;
