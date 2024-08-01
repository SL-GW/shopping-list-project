import React, { useState } from "react";
import "./List.css";

export default function List() {
  const [currentProduct, setCurrentProduct] = useState("");
  const [products, setProducts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setProducts([...products, { text: currentProduct, done: false }]);
    setCurrentProduct("");
  }

  function updateCurrentProduct(event) {
    setCurrentProduct(event.target.value);
  }

  function markAsDone(index) {
    let newProduct = products.map((item, i) => {
      if (i === index) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setProducts(newProduct);
  }

  return (
    <div className="List">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter item"
          value={currentProduct}
          onChange={updateCurrentProduct}
        />
        <input className="searchButton" type="submit" value="Add" />
      </form>
      <ul>
        {products.map((item, index) => (
          <li key={index} className={item.done ? "to buy" : ""}>
            {item.text}
            <button onClick={() => markAsDone(index)}>
              {item.done ? "bought" : "to buy"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
