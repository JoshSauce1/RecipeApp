
import './App.css';
import './App.js';
import Axios from 'axios';
import { useState } from "react";

function App() {
  const [query, setquery] = useState("")

  const app_key = "2f4a33fce4f4959bc8cd6c7777b0ca7a";
  const app_id = "da130918";

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}&health=alcohol-free`;


  async function  getRecipes(){
    var result = await Axios.get(url);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Culinary Craze</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input 
        type="text" 
        className="app__input"
        placeholder="enter ingriedient" 
        value={query} onChange={(e) => setquery (e.target.value)} 
        />
        <input className = "app__submit" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
