
import './App.css';
import './App.js';
import  RecipeTile  from './RecipeTile.js';
import Axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([])
  const [healthLabel, sethealthLabel] = useState(["vegan"])



  const app_key = "2f4a33fce4f4959bc8cd6c7777b0ca7a";
  const app_id = "da130918";

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}&health=${healthLabel}`;


  async function  getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className = "app_header">
      <h1>Culinary Craze</h1>
      <p> Powered by the Edemam Recipe Search API, enter any food ingredient or recipe to see how it works! 
      </p>
      <p>Click on images to 
        see recipe directions.</p>
      </div>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input 
        type="text" 
        className="app__input"
        placeholder="Enter Ingredient!" 
        value={query} onChange={(e) => setquery (e.target.value)} 
        />
        <input className = "app__submit" type="submit" value="Search" />

        <select className="app_healthLabels">
          <option onClick={()=> sethealthLabel("vegan")}>Vegan</option>
          <option onClick={()=> sethealthLabel("vegetarian")}>Vegatarian</option> 
        
          </select>
      </form>

      <div className = "app_note"><p>*Note: The API only allows a maximum of 5 searches per minute</p></div>
      <div className = "app_Recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe}/>;
        })}
        
      </div>


    </div>
  );
}

export default App;
