import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.products);

  console.log(cartItems);

  return <div>Cart</div>;
};

export default Cart;
