import React from "react";

const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="cart-icon.png" alt="Carrito" style={{ height: "30px", marginRight: "0.5rem" }} />
      <span>3</span>
    </div>
  );
};

export default CartWidget;