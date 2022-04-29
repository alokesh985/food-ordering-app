import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPageContainer from "./itemsPage/ItemsPageContainer";
import CheckoutPageContainer from "./checkoutPage/CheckoutPageContainer";

const MainContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemsPageContainer />} />
        <Route path="/checkout" element={<CheckoutPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
