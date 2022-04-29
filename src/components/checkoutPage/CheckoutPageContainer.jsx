import React from "react";
import { checkoutPageLinks } from "../../constants/headerLinks";
import Header from "../common/Header";

const CheckoutPageContainer = () => {
  return (
    <div>
      <Header headerLinks={checkoutPageLinks} />
    </div>
  );
};

export default CheckoutPageContainer;
