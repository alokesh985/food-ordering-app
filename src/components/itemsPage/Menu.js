import React from "react";
import styles from "./menu.module.scss";
import { useSelector } from "react-redux";
import { AddButton } from "../common";
import { isEmpty } from "lodash";
import { Watch } from "react-loader-spinner";

// Bottom middle component that shows the different items that are available in each cuisine
const Menu = ({
  categories,
  categoryIDMapping,
  categoryNameMapping,
  idToNameMapping,
}) => {
  const selectedCusineNumber = useSelector(
    (state) => state.menuPageReducer.selectedCusineNumber
  );

  return isEmpty(categories) ? (
    <div className={styles.loader}>
      <Watch height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  ) : (
    <div className={styles.container}>
      <div>
        <h1>{categoryNameMapping[selectedCusineNumber]}</h1>
        <h4>{`${categoryIDMapping[selectedCusineNumber].length} items`}</h4>
      </div>
      {categoryIDMapping[selectedCusineNumber].map((item, idx) => {
        return (
          <div className={styles.item} key={idx}>
            <div className={styles.itemDetails}>
              <div className={styles.name}>{item.itemName}</div>
              <div className={styles.price}>{`₹ ${item.price}`}</div>
            </div>
            <AddButton
              itemID={item.itemID}
              price={item.price}
              idToNameMapping={idToNameMapping}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
