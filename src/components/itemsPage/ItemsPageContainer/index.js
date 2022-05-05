import React from "react";
import { Header } from "../../common";
import SubHeader from "../SubHeader";
import MenuCuisines from "../MenuCuisines";
import Menu from "../Menu";
import Cart from "../Cart";
import { MAIN_PAGE_LINKS } from "../../../constants/headerLinks";
import styles from "./items-page-container.module.scss";

// Container component for bottom part of main page
const ItemsPageContainer = ({
  foodItems,
  categoryIDMapping,
  categoryToNameMapping,
}) => {
  const renderBody = () => {
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

  return (
    <div>
      <Header headerLinks={MAIN_PAGE_LINKS} />
      <SubHeader />
      {renderBody()}
    </div>
  );
};

export default ItemsPageContainer;
