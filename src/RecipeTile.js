import './RecipeTile.css';
import React from 'react';

export  default function RecipeTile({recipe}) {
  let ingredients = recipe["recipe"]["ingredients"];
  return (
        <div className="recipeTile">
        <p className="recipe_label">{recipe["recipe"]["label"]}</p>
        <img className="recipe_image" src={recipe["recipe"]["image"]}></img>
    </div>

  
    );
}
