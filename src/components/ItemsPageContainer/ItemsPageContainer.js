import React from "react";
import { Header } from "../common";
import SubHeader from "./components/SubHeader/SubHeader";
import MenuCuisines from "./components/MenuCuisines";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart";
import { MAIN_PAGE_LINKS } from "../../constants/headerLinks";
import styles from "./items-page-container.module.scss";

const renderBody = (categoryToNameMapping, categoryIDMapping, foodItems) => {
  return (
    <div className={styles.body}>
      <MenuCuisines categoryToNameMapping={categoryToNameMapping} />
      <Menu
        categoryIDMapping={categoryIDMapping}
        categoryNameMapping={categoryToNameMapping}
      />
      <Cart foodItems={foodItems} />
    </div>
  );
};

// Container component for bottom part of main page
const ItemsPageContainer = ({
  foodItems,
  categoryIDMapping,
  categoryToNameMapping,
}) => {
  return (
    <div>
      <Header headerLinks={MAIN_PAGE_LINKS} />
      <SubHeader />
      {renderBody(categoryToNameMapping, categoryIDMapping, foodItems)}
    </div>
  );
};

export default ItemsPageContainer;
