import React from "react";
import styles from "./menu.module.scss";
import { useSelector } from "react-redux";
import { AddButton } from "../../../common";
import {
  getItemPrices,
  getCurrentCuisineFoodItems,
} from "../../../../store/reducers/selectors/menuSelectors.selectors";

const renderMenuItem = function (foodItem, idx) {
  return (
    <div className={styles.item} key={idx}>
      <div className={styles.itemDetails}>
        <div className={styles.name}>{foodItem}</div>
        <div
          className={styles.price}
        >{`₹ ${this.foodItemPrices[foodItem]}`}</div>
      </div>
      <AddButton itemName={foodItem} />
    </div>
  );
};

const renderMenuItems = (currentFoodItems, foodItemPrices) => {
  return currentFoodItems.map(renderMenuItem, { foodItemPrices });
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
