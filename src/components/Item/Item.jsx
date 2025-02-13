/* eslint-disable react/prop-types */
const Item = ({ item }) => {
  const { name, price, image } = item;
  return (
    <div>
      <img src={image} alt="Product" />
      <button> add to Cart</button>
      <div>
        <span>{name}</span>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Item;
