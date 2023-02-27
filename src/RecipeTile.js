import './RecipeTile.css';
import React from 'react';


export  default function RecipeTile({recipe}) {
  let ingredients = recipe["recipe"]["ingredients"];

  return (
        <div className="recipeTile ">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <p className="recipe_label">{recipe["recipe"]["label"]}</p>
        <p className="recipe_cals">Calories: {Math.round(recipe["recipe"]["calories"])}</p>  {/*Rounds to the nearest integer*/}
        <a href={recipe["recipe"]["url"]}> <img className="recipe_image" src={recipe["recipe"]["image"]}></img> </a>
        <ul className="recipe_list"> {/*Ingredients is an array of objects, so need to iterate through it with map to display*/}
                {ingredients.map(ingredient => (
                    <li className="recipe_ingredients">-{ingredient.text}</li>
                ))}
            </ul>
    </div>

  
    );
}
