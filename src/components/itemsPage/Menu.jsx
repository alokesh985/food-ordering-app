import React, { useEffect, useState } from "react";
import styles from "../../styles/menu.module.scss";
import { useSelector } from "react-redux";
import { selectSlNo } from "../../store/slices/restaurantSlice";
import { menuItems } from "../../constants/menuItems";
import AddButton from "../common/AddButton";

const Menu = () => {
  const currentSlNo = useSelector(selectSlNo);
  const [currentMenuItems, setCurrentMenuItems] = useState([]);
  const [currentCategory, setCategory] = useState("");
  useEffect(() => {
    const currentMenu = menuItems.filter(
      (item) => item.slNo === currentSlNo
    )[0];
    setCurrentMenuItems(currentMenu.items);
    setCategory(currentMenu.categoryName);
  }, [currentSlNo]);

  return (
    <div className={styles.container}>
      <div>
        <h1>{currentCategory}</h1>
        <h4>{`${currentMenuItems.length} items`}</h4>
      </div>
      {currentMenuItems.map((item, idx) => {
        return (
          <div className={styles.item} key={idx}>
            <div className={styles.itemDetails}>
              <div className={styles.name}>{item.itemName}</div>
              <div className={styles.price}>{`₹ ${item.price}`}</div>
            </div>
            <AddButton
              currentItemName={item.itemName}
              currentItemPrice={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
