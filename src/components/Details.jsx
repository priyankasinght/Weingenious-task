import React from 'react'

const Details = ({ selectedRecipe }) => {
    return (
        <div>
            <h2>{selectedRecipe.strMeal}</h2>
            <img src={selectedRecipe.strMealThumb} alt='loading' />
            <h4>ingradiant</h4>
            <ul>
                {Object.keys(selectedRecipe).filter(key => key.includes('strIngrediants') && selectedRecipe[key])
                    .map(key => (
                        <li key={key}>
                            {selectedRecipe[key]}
                        </li>
                    ))}
            </ul>
            <h3>dtals</h3>
            <p>{selectedRecipe.strInstructions}</p>
        </div>
    )
}

export default Details