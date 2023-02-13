import './RecipeTile.css';
import React from 'react';

export  default function RecipeTile({recipe}) {
  return (
        <div className="recipeTile">
        <img className="recipe_image" src={recipe["recipe"]["image"]}></img>
        <p className="recipe_label">{recipe["recipe"]["label"]}</p>
    </div>
    );
}
