import React, { useState } from "react";

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <span onClick={addToCart}>🛒 {cartCount}</span>
    </div>
  );
};

export default CartWidget;
