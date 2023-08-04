import React from 'react'
import "./Card.css"

const Card = ({recipe, handleRecipeClick, handleAddToFav}) => {
  return (
    <div>
    <div className='rec-container'>
    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
    <h4>{recipe.strMeal}</h4>
    <button onClick={() => handleRecipeClick(recipe)}>see detail</button>
    <button onClick={()=> handleAddToFav(recipe)}>fav</button>
    </div>
    </div>
  )
}

export default Card