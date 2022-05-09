import React from "react";
import styles from "./menu-cuisines.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../../../../store/actions/menuPageActions";
import { isEmpty } from "lodash";
import Loader from "../../../common/Loader";
import classNames from "classnames";

const handleClick = (dispatch, cusineNumber) =>
  dispatch(changeCategory(cusineNumber));

const getCuisineClass = (cuisineNumber, selectedCusineNumber) => {
  return classNames({
    [styles.selectedCategory]: cuisineNumber === selectedCusineNumber,
    [styles.category]: cuisineNumber !== selectedCusineNumber,
  });
};

const renderCuisines = (
  dispatch,
  categoryToNameMapping,
  selectedCusineNumber
) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {Object.keys(categoryToNameMapping).map((cuisineNumber, idx) => {
          return (
            <div
              key={idx}
              className={getCuisineClass(cuisineNumber, selectedCusineNumber)}
              onClick={() => handleClick(dispatch, cuisineNumber)}
            >
              {categoryToNameMapping[cuisineNumber]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Bottom left-most component that shows the different cuisines available
const MenuCuisines = ({ categoryToNameMapping }) => {
  const dispatch = useDispatch();

  const selectedCusineNumber = useSelector(
    (state) => state.menuPageReducer.selectedCusineNumber
  );

  return isEmpty(categoryToNameMapping) ? (
    <div className={styles.loader}>
      <Loader height="100" width="100" type="large" />
    </div>
  ) : (
    renderCuisines(dispatch, categoryToNameMapping, selectedCusineNumber)
  );
};

export default MenuCuisines;
