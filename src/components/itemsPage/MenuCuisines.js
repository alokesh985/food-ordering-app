import React, { useCallback } from "react";
import styles from "./menu-cuisines.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../../store/actions/menuPageActions";
import { isEmpty } from "lodash";
import { Watch } from "react-loader-spinner";
import classNames from "classnames";

// Bottom left-most component that shows the different cuisines available
const MenuCuisines = ({ categoryToNameMapping }) => {
  const dispatch = useDispatch();
  const selectedCusineNumber = useSelector(
    (state) => state.menuPageReducer.selectedCusineNumber
  );
  const handleClick = useCallback(
    (cusineNumber) => dispatch(changeCategory(cusineNumber)),
    []
  );

  const getCuisineClass = (cuisineNumber) => {
    return classNames({
      [styles.selectedCategory]: cuisineNumber === selectedCusineNumber,
      [styles.category]: cuisineNumber !== selectedCusineNumber,
    });
  };

  return isEmpty(categoryToNameMapping) ? (
    <div className={styles.loader}>
      <Watch height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {Object.keys(categoryToNameMapping).map((cuisineNumber, idx) => {
          return (
            <div
              key={idx}
              className={getCuisineClass(cuisineNumber)}
              onClick={() => handleClick(cuisineNumber)}
            >
              {categoryToNameMapping[cuisineNumber]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCuisines;
