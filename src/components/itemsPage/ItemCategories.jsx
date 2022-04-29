import React from "react";
import styles from "../../styles/items-page/item-categories.module.scss";
import { menuItems } from "../../constants/menuItems";
import { useSelector, useDispatch } from "react-redux";
import { selectSlNo, changeSlNo } from "../../store/slices/restaurantSlice";

const ItemCategories = () => {
  const dispatch = useDispatch();
  const selectedSlNo = useSelector(selectSlNo);
  const handleClick = (slNo) => dispatch(changeSlNo(slNo));
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {menuItems.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                selectedSlNo === item.slNo
                  ? styles.selectedCategory
                  : styles.category
              }
              onClick={() => handleClick(item.slNo)}
            >
              {item.categoryName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemCategories;
