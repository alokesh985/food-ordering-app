import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemsPageContainer from "./itemsPage/ItemsPageContainer";

const MainContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemsPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
