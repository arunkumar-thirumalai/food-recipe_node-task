
import './App.css';
import Axios from 'axios';
import { useState} from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const[query,setquery] =useState("");
  const[recipes,setrecipes]=useState([])

const YOUR_APP_ID = '935aeba4'

const YOUR_APP_KEY = '2e82fde0c6cb3056ead5f9d7f780188d'

const Url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

async function getRecipes(){
  var result = await Axios.get(Url);
  setrecipes(result.data.hits)
  console.log(result.data)
}

const onSubmit = (e) => {
  e.preventDefault();
  getRecipes();
};

  return (
    <div className="app">
     <h1> 🍚FOOD RECIPE📄 </h1>
     <form className="app__searchForm" onSubmit = {onSubmit} >
       <input className="app__input" type="text" placeholder="enter ingredient" value={query} onChange={(e) => setquery (e.target.value)} />
<input className="app__submit" type="submit" value="Search" />
     </form>
     <div className="app__recipes">{recipes.map((recipe) => {
       return <RecipeTile recipe={recipe} />
     })}</div>
    </div>
  );
}

export default App;