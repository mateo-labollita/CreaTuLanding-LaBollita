import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Cantidad: {item.quantity}</p>
      <p>Precio: ${item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
