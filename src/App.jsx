import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Desserts from "./components/Desserts/Desserts";
import data from "./assets/data.json"; // Import the JSON file directly
const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Since we're importing the JSON, we don't need to fetch it
    const extracted = data.map(({ name, price, image }, index) => ({
      id: index + 1,
      name,
      price,
      image: image.desktop,
    }));
    setItems(extracted);
  }, []); // No need for dependencies since data is static

  return (
    <main>
      <Desserts items={items} />
      <Cart />
    </main>
  );
};

export default App;
