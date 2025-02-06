import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#f8f8f8" }}>
      <div>
        <Link to="/">
          <img src="logo.png" alt="Logo de la tienda" style={{ height: "40px" }} />
        </Link>
      </div>
      <div>
        <Link to="/" style={{ margin: "0 1rem" }}>Inicio</Link>
        <Link to="/category/ropa" style={{ margin: "0 1rem" }}>Ropa</Link>
        <Link to="/category/electronica" style={{ margin: "0 1rem" }}>Electrónica</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
