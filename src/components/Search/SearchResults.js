import useFetch from './useFetch'
import IngredientList from '../ingredients/IngredientList'
import { useState } from 'react'

function SearchResults (props) {
    const ingredientList = useFetch('https://pestle-server.onrender.com/ingredients')
    const searchQuery = props.query.trim().toLowerCase()
    const [isLoading, setIsLoading] = useState(true)

    if (ingredientList.length > 0) {
        setIsLoading(false)
    }

 const results = 
 ingredientList.filter(ingredient => 
     ingredient.name.includes(searchQuery) || 
     ingredient.effects.includes(searchQuery))

    return (
        <section>
        {isLoading ? 
        <p>Please wait, loading results...</p> : 
        <IngredientList ingredientList={results} />}
        </section>
    )
}

export default SearchResults