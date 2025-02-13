/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, image } = item;
  return (
    <div>
      <img src={image} alt="Product" />
      <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
      <div>
        <span>{name}</span>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
