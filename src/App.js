
import './App.css';
import './App.js';
import Axios from 'axios';

function App() {
  const app_key = "2f4a33fce4f4959bc8cd6c7777b0ca7a";
  const app_id = "da130918";

  var url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&health=alcohol-free
  `


  async function  getRecipes(){
    var result = await Axios.get(url);
    console.log(result.data);
  }


  return (
    <div className="App">
      <h1 onClick={getRecipes}>Culinary Craze</h1>
    </div>
  );
}

export default App;
