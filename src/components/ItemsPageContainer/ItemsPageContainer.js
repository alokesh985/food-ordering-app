import React, { useEffect, useState } from "react";
import { Header } from "../common";
import SubHeader from "./components/SubHeader/SubHeader";
import MenuCuisines from "./components/MenuCuisines";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart";
import { MAIN_PAGE_LINKS } from "../../constants/headerLinks";
import { CUISINES } from "../../constants/cuisines";
import { FOOD_ITEMS } from "../../constants/foodItems";
import styles from "./items-page-container.module.scss";
import Loader from "../common/Loader";
import { saveMenuData } from "../actions/menuPage.actionCreator";
import { useDispatch } from "react-redux";
import { compose } from "recompose";

const renderBody = () => {
  return (
    <div className={styles.body}>
      <MenuCuisines />
      <Menu />
      <Cart />
    </div>
  );
};

// Container component for bottom part of main page
const ItemsPageContainer = () => {
  const [showLoader, toggleLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            foodItems: FOOD_ITEMS,
            cuisines: CUISINES,
          }),
        1000
      );
    });

    fetchData
      .then((response) => {
        const { foodItems, cuisines } = response;
        compose(dispatch, saveMenuData)({ foodItems, cuisines });
      })
      .finally(() => toggleLoader(false));
  }, []);

  return (
    <div>
      <Header headerLinks={MAIN_PAGE_LINKS} />
      <SubHeader />
      {showLoader ? <Loader /> : renderBody()}
    </div>
  );
};

export default ItemsPageContainer;
