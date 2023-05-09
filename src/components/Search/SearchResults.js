import useFetch from './useFetch'
import IngredientList from '../ingredients/IngredientList'

function SearchResults (props) {
    const ingredientList = useFetch('https://pestle-server.onrender.com')
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