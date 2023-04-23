import useFetch from './useFetch'
import IngList from '../MockData/IngList'
import IngredientList from '../ingredients/IngredientList'

function SearchResults (props) {
    const ingList = IngList
    const ingredientList = useFetch('http://localhost:3001/ingredients')
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