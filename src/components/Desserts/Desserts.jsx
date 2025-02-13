/* eslint-disable react/prop-types */
import styles from "./Desserts.module.css";
import Item from "../Item/Item";
const Desserts = ({ items }) => {
  return (
    <div>
      <h1>Desserts</h1>
      <div className={styles.grid}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Desserts;
