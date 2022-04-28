import React, { useEffect } from "react";
import Header from "../common/Header";
import Restaurant from "./Restaurant";
import ItemCategories from "./ItemCategories";
import Menu from "./Menu";
import Cart from "./Cart";
import { mainPageLinks } from "../../constants/headerLinks";
import styles from "../../styles/items-page-container.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectSlNo, changeSlNo } from "../../store/restaurantSlice";

const ItemsPageContainer = () => {
  const selectedIdx = useSelector(selectSlNo);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeSlNo(2));
    console.log(selectedIdx);
  };

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
