import React, { useState, useEffect } from "react";
import { CHECKOUT_PAGE_LINKS } from "../../constants/headerLinks";
import { Header } from "../common";
import CheckoutBody from "./CheckoutBody";
import { FOOD_ITEMS } from "../../constants/foodItems";

const CheckoutPageContainer = () => {
  const [foodItems, setFoodItems] = useState({});
  useEffect(() => {
    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => resolve("DATA FETCHED"), 1000);
    });
    fetchData.then(() => setFoodItems(FOOD_ITEMS));
  }, []);
  return (
    <div>
      <Header headerLinks={CHECKOUT_PAGE_LINKS} headerText="SECURE CHECKOUT" />
      <CheckoutBody foodItems={foodItems} />
    </div>
  );
};

export default CheckoutPageContainer;
