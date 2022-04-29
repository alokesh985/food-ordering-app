import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPageContainer from "./itemsPage/ItemsPageContainer";
import CheckoutPageContainer from "./checkoutPage/CheckoutPageContainer";
import Page404 from "./404";
import OrderSuccessfulPage from "./OrderSuccessfulPage";

const MainContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemsPageContainer />} />
        <Route path="/checkout" element={<CheckoutPageContainer />} />
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
