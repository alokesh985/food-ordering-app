import React, { useCallback } from "react";
import styles from "./menu.module.scss";
import { useSelector } from "react-redux";
import { AddButton } from "../../common";
import { isEmpty } from "lodash";
import Loader from "../../common/Loader";

// Bottom middle component that shows the different items that are available in each cuisine
const Menu = ({ categoryIDMapping, categoryNameMapping }) => {
  const selectedCusineNumber = useSelector(
    (state) => state.menuPageReducer.selectedCusineNumber
  );

  const renderMenuItems = useCallback(() => {
    return categoryIDMapping[selectedCusineNumber].map((item, idx) => {
      return (
        <div className={styles.item} key={idx}>
          <div className={styles.itemDetails}>
            <div className={styles.name}>{item.itemName}</div>
            <div className={styles.price}>{`₹ ${item.price}`}</div>
          </div>
          <AddButton itemID={item.itemID} price={item.price} />
        </div>
      );
    });
  }, [categoryIDMapping, selectedCusineNumber]);

  return isEmpty(categoryIDMapping) ? (
    <Loader height="100" width="100" type="large" />
  ) : (
    <div className={styles.container}>
      <div>
        <h1>{categoryNameMapping[selectedCusineNumber]}</h1>
        <h4>{`${categoryIDMapping[selectedCusineNumber].length} items`}</h4>
      </div>
      {renderMenuItems()}
    </div>
  );
};

export default Menu;
