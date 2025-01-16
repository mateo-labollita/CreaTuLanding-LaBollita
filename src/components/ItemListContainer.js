import React from "react";

const ItemListContainer = ({ message }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>{message}</h2>
      <p>¡Pronto aquí estarán nuestros productos!</p>
    </div>
  );
};

export default ItemListContainer;