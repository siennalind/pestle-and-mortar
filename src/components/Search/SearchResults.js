// import useFetch from './useFetch'
import IngredientList from '../ingredients/IngredientList'
import IngList from '../MockData/IngList'
import { useState } from 'react'

function SearchResults (props) {
    const ingredientList = IngList
    const searchQuery = props.query.trim().toLowerCase()

 const results = 
 ingredientList.filter(ingredient => 
     ingredient.name.includes(searchQuery) || 
     ingredient.effects.includes(searchQuery))

    return (
        <section>
        <IngredientList ingredientList={results} />
        </section>
    )
}

export default SearchResults