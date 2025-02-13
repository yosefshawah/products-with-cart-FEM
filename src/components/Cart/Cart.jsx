import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="50" />
          <span>{item.name}</span>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
