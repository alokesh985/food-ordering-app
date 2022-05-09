import { createSelector } from "reselect";

export const getItemPrices = createSelector(
  (state) => state.menuReducer.foodItems,
  (foodItems) => {
    const prices = {};
    for (let foodItem of foodItems) {
      prices[foodItem.name] = foodItem.price;
    }
    return prices;
  }
);

export const getCurrentCuisineFoodItems = createSelector(
  (state) => state.menuReducer.selectedCuisineID,
  (state) => state.menuReducer.cuisines,
  (selectedCuisineID, cuisines) => {
    for (const cuisine of cuisines) {
      if (cuisine.id === selectedCuisineID)
        return { cuisineItems: cuisine.items, cuisineName: cuisine.name };
    }
  }
);
