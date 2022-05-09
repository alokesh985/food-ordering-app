import React from "react";
import styles from "./menu.module.scss";
import { useSelector } from "react-redux";
import { AddButton } from "../../../common";
import {
  getItemPrices,
  getCurrentCuisineFoodItems,
} from "../../../../store/reducers/selectors/menuSelectors.selectors";

const renderMenuItems = (currentFoodItems, foodItemPrices) => {
  return currentFoodItems.map((item, idx) => {
    return (
      <div className={styles.item} key={idx}>
        <div className={styles.itemDetails}>
          <div className={styles.name}>{item}</div>
          <div className={styles.price}>{`₹ ${foodItemPrices[item]}`}</div>
        </div>
        <AddButton itemName={item} price={foodItemPrices[item]} />
      </div>
    );
  });
};

// Bottom middle component that shows the different items that are available in each cuisine
const Menu = () => {
  const foodItemPrices = useSelector(getItemPrices);
  const { cuisineName, cuisineItems } = useSelector(getCurrentCuisineFoodItems);

  return (
    <div className={styles.container}>
      <div>
        <h1>{cuisineName}</h1>
        <h4>{`${cuisineItems.length} items`}</h4>
      </div>
      {renderMenuItems(cuisineItems, foodItemPrices)}
    </div>
  );
};

export default Menu;
