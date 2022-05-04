import React, { useState, useEffect } from "react";
import { Header } from "../common";
import SubHeader from "./SubHeader";
import MenuCuisines from "./MenuCuisines";
import Menu from "./Menu";
import Cart from "./Cart";
import { MAIN_PAGE_LINKS } from "../../constants/headerLinks";
import { FOOD_ITEMS } from "../../constants/foodItems";
import {
  MENU_CATEGORIES,
  CATEGORY_ID_TO_ITEMS_MAPPING,
  CATEGORY_ID_TO_NAME_MAPPING,
} from "../../constants/menuCategories";
import styles from "./items-page-container.module.scss";

// Container component for bottom part of main page
const ItemsPageContainer = () => {
  const [foodItems, setFoodItems] = useState({});
  const [foodCategories, setFoodCategories] = useState([]);
  const [categoryIDMapping, setCategoryIDMapping] = useState({});
  const [categoryToNameMapping, setCategoryToNameMapping] = useState({});

  useEffect(() => {
    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data Fetched Successfully!"), 1000);
    });

    fetchData.then((response) => {
      setFoodCategories(MENU_CATEGORIES);
      setFoodItems(FOOD_ITEMS);
      setCategoryIDMapping(CATEGORY_ID_TO_ITEMS_MAPPING);
      setCategoryToNameMapping(CATEGORY_ID_TO_NAME_MAPPING);
    });
  }, []);

  return (
    <div>
      <Header headerLinks={MAIN_PAGE_LINKS} />
      <SubHeader />
      <div className={styles.body}>
        <MenuCuisines categoryToNameMapping={categoryToNameMapping} />
        <Menu
          categories={foodCategories}
          categoryIDMapping={categoryIDMapping}
          categoryNameMapping={categoryToNameMapping}
          idToNameMapping={foodItems}
        />
        <Cart foodItems={foodItems} />
      </div>
    </div>
  );
};

export default ItemsPageContainer;
