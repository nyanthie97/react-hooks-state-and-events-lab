import React from "react";
import react, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass = inCart ? "in-cart" : ""
  const buttonClass = inCart ? "remove" : "add"
  function handleClick(e) {
    setInCart(!inCart)
  }

  return (
    <li className="">
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
    </li>
  );
}



export default Item;
