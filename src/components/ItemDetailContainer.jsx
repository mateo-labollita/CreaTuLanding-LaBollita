import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const productos = [
  { id: 1, name: "Camiseta", category: "ropa", description: "Camiseta 100% algodón" },
  { id: 2, name: "Pantalón", category: "ropa", description: "Pantalón de mezclilla" },
  { id: 3, name: "Laptop", category: "electronica", description: "Laptop con procesador Intel i7" },
  { id: 4, name: "Teléfono", category: "electronica", description: "Teléfono con cámara de 108MP" },
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find(p => p.id === parseInt(itemId)));
      }, 1000);
    }).then((data) => setProduct(data));
  }, [itemId]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;
