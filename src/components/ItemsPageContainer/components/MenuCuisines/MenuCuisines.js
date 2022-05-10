import React from "react";
import styles from "./menu-cuisines.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeCuisine } from "../../../actions/menuPage.actionCreator";
import classNames from "classnames";
import { compose } from "recompose";

const handleClick = (dispatch, cuisineID) => {
  compose(dispatch, changeCuisine)({ cuisineID });
};

const getCuisineClass = (cuisineID, selectedCuisineID) => {
  return classNames({
    [styles.selectedCategory]: cuisineID === selectedCuisineID,
    [styles.category]: cuisineID !== selectedCuisineID,
  });
};

const renderCuisine = function (cuisine, idx) {
  return (
    <div
      key={idx}
      className={getCuisineClass(cuisine.id, this.selectedCuisineID)}
      onClick={() => handleClick(this.dispatch, cuisine.id)}
    >
      {cuisine.name}
    </div>
  );
};

const renderCuisines = (dispatch, cuisines, selectedCuisineID) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {cuisines.map(renderCuisine, { selectedCuisineID, dispatch })}
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
