import React, { useMemo } from "react";
import styles from "./cart-body.module.scss";
import { useSelector } from "react-redux";
import CartButton from "../CartButton/CartButton";
import { getItemPrices } from "../../../store/reducers/selectors/menuSelectors.selectors";

const calculateTotal = (cart, itemPrices) => {
  let total = 0;
  for (let foodItem of cart) {
    total += foodItem.quantity * itemPrices[foodItem.itemName];
  }
  return total;
};

const renderCartItems = (cart, itemPrices) => {
  return cart.map((foodItem, idx) => {
    return (
      <div key={idx} className={styles.cartItem}>
        <h4 className={styles.itemName}>{foodItem.itemName}</h4>
        <CartButton
          qty={foodItem.quantity}
          itemName={foodItem.itemName}
          price={itemPrices[foodItem.itemName]}
        />
        <h3 className={styles.price}>{`₹ ${
          foodItem.quantity * itemPrices[foodItem.itemName]
        }`}</h3>
      </div>
    );
  });
};

// Common component that shows the items in the cart and the total amount
const CartBody = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const itemPrices = useSelector(getItemPrices);

  const memoizedTotal = useMemo(() => calculateTotal(cart, itemPrices), [cart]);

  return (
    <React.Fragment>
      <div className={styles.cartItemDetails}>
        {renderCartItems(cart, itemPrices)}
      </div>
      <h1>{`TOTAL: ₹ ${memoizedTotal}`}</h1>
    </React.Fragment>
  );
};

export default CartBody;
