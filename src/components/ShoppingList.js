import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  let itemsToDisplay=items.filter(item=>category==="All"?true:category===item.category)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;

