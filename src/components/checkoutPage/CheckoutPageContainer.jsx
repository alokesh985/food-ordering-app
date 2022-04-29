import React from "react";
import { checkoutPageLinks } from "../../constants/headerLinks";
import Header from "../common/Header";
import CheckoutBody from "./CheckoutBody";

const CheckoutPageContainer = () => {
  return (
    <div>
      <Header headerLinks={checkoutPageLinks} headerText="SECURE CHECKOUT" />
      <CheckoutBody />
    </div>
  );
};

export default CheckoutPageContainer;
