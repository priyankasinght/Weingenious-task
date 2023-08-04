import React, { useState, useEffect } from 'react';
import './App.css';

import Search from './components/Search';
import Card from './components/Card';
import Details from './components/Details';
import Fav from './components/Fav';

function App() {

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [cart, setCart] = useState([])

  const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  useEffect(() => {
    if (search) {
      fetch(`${API_URL}${search}`)
        .then(response => response.json())
        .then(data => setSearchResult(data.meals))
        .catch(error => console.error(error));
    }
  }, [search])

  const handleRecipeClick = recipe => {
    setSelectedRecipe(recipe);
  }

  const handleAddToFav = recipe => {
    if(!cart.find(fav => fav.idMeal === recipe.idMeal)){
      setCart([...cart, recipe])
    }
  }

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      <div className='rec-Card'>
        {searchResult.map(recipe => (
          <Card 
            key={recipe.idMeal}
            recipe={recipe}
            handleRecipeClick={handleRecipeClick}
            handleAddToFav = {handleAddToFav}

          />
        ))}
      </div>

      {selectedRecipe && <Details selectedRecipe={selectedRecipe} />}
      <Fav cart={cart}/>

    </div>
  );
}

export default App;
