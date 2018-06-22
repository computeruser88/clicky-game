import React from "react";
import "./ButtonList.css";

// RecipeList renders a bootstrap list item
const ButtonList = props => (
  <div className="button-list">{props.children}</div>
);

export default ButtonList;