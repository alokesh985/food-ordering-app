import React from "react";
import styles from "./menu-cuisines.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeCuisine } from "../../../actions/menuPage.actionCreator";
import classNames from "classnames";

const handleClick = (dispatch, cuisineID) => dispatch(changeCuisine(cuisineID));

const getCuisineClass = (cuisineID, selectedCuisineID) => {
  return classNames({
    [styles.selectedCategory]: cuisineID === selectedCuisineID,
    [styles.category]: cuisineID !== selectedCuisineID,
  });
};

const renderCuisines = (dispatch, cuisines, selectedCuisineID) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {cuisines.map((cuisine, idx) => {
          return (
            <div
              key={idx}
              className={getCuisineClass(cuisine.id, selectedCuisineID)}
              onClick={() => handleClick(dispatch, cuisine.id)}
            >
              {cuisine.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Bottom left-most component that shows the different cuisines available
const MenuCuisines = () => {
  const dispatch = useDispatch();

  const selectedCuisineID = useSelector(
    (state) => state.menuReducer.selectedCuisineID
  );
  const cuisines = useSelector((state) => state.menuReducer.cuisines);

  return renderCuisines(dispatch, cuisines, selectedCuisineID);
};

export default MenuCuisines;
