import React, { useState } from "react";
import "./List.css";

export default function List() {
  const [item, setItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    updateList(item);
  }

  function updateList(event) {
    setItem(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="List">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="search"
          placeholder="Enter item"
          onChange={updateList}
        />
        <input className="searchButton" type="submit" value="Add" />
      </form>
      <ul>
        <li>{item}</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
