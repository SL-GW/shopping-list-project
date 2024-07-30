import React, { useState } from "react";
import "./List.css";

export default function List() {
  const [currentItem, setCurrentItem] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (currentItem.trim() !== "") {
      setItems([...items, currentItem]);
      setCurrentItem(""); // Clear the input field
    }
  }

  function updateCurrentItem(event) {
    setCurrentItem(event.target.value);
  }

  return (
    <div className="List">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Enter item"
          value={currentItem}
          onChange={updateCurrentItem}
        />
        <input className="searchButton" type="submit" value="Add" />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
