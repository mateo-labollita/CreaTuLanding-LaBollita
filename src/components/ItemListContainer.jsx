import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const productos = [
  { id: 1, name: "Camiseta", category: "ropa" },
  { id: 2, name: "Pantalón", category: "ropa" },
  { id: 3, name: "Laptop", category: "electronica" },
  { id: 4, name: "Teléfono", category: "electronica" },
];

const ItemListContainer = ({ message }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? productos.filter(p => p.category === categoryId) : productos);
      }, 1000);
    }).then((data) => setItems(data));
  }, [categoryId]);

  return (
    <div>
      <h2>{message}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
