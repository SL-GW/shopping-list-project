import React, { useState } from "react";

export default function List() {
  const [item, setItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    updateList(item);
  }

  function updateList(event) {
    setItem(event.target.value);
  }

  return (
    <div className="List">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter item" />
        <input type="submit" value="Add" onChange={updateList} />
      </form>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
