import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPage from "./ItemsPageContainer";
import CheckoutPage from "./CheckoutPageContainer";
import Page404 from "./404";
import OrderSuccessfulPage from "./OrderSuccessfulPage";
import {
  CATEGORY_ID_TO_ITEMS_MAPPING,
  CATEGORY_ID_TO_NAME_MAPPING,
} from "../constants/menuCategories";
import { FOOD_ITEMS } from "../constants/foodItems";

const MainContainer = () => {
  const [foodItems, setFoodItems] = useState({});
  const [categoryIDMapping, setCategoryIDMapping] = useState({});
  const [categoryToNameMapping, setCategoryToNameMapping] = useState({});

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => resolve("Data Fetched Successfully!"), 1000);
    });

    fetchData.then(() => {
      setFoodItems(FOOD_ITEMS);
      setCategoryIDMapping(CATEGORY_ID_TO_ITEMS_MAPPING);
      setCategoryToNameMapping(CATEGORY_ID_TO_NAME_MAPPING);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ItemsPage
              foodItems={foodItems}
              categoryIDMapping={categoryIDMapping}
              categoryToNameMapping={categoryToNameMapping}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage foodItems={foodItems} />}
        />
        <Route path="/order-success" element={<OrderSuccessfulPage />} />
        <Route path="/search" element={<Page404 />} />
        <Route path="/offers" element={<Page404 />} />
        <Route path="/help" element={<Page404 />} />
        <Route path="/sign-in" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
