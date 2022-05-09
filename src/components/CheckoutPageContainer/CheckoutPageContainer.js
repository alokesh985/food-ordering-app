import React from "react";
import { CHECKOUT_PAGE_LINKS } from "../../constants/headerLinks";
import { Header } from "../common";
import CheckoutBody from "./components/CheckoutBody";

const CheckoutPageContainer = ({ foodItems }) => {
  return (
    <div>
      <Header headerLinks={CHECKOUT_PAGE_LINKS} headerText="SECURE CHECKOUT" />
      <CheckoutBody foodItems={foodItems} />
    </div>
  );
};

export default CheckoutPageContainer;
