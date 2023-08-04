import React from 'react'

const Fav = ({ cart }) => {
    return (
        <div>
            <ul>
                {cart.map(fav => (
                    <li key={fav.idMeal}>{fav.strMeal}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fav