import React from "react";

export default function List() {
  return (
    <div className="List">
      <form>
        <input type="search" placeholder="Enter item" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
