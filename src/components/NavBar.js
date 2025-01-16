import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#f8f8f8" }}>
      <div>
        <img src="logo.png" alt="Logo de la tienda" style={{ height: "40px" }} />
      </div>
      <div>
        <a href="#home" style={{ margin: "0 1rem" }}>Inicio</a>
        <a href="#products" style={{ margin: "0 1rem" }}>Productos</a>
        <a href="#about" style={{ margin: "0 1rem" }}>Nosotros</a>
        <a href="#contact" style={{ margin: "0 1rem" }}>Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;