import useFetch from './useFetch'
import IngList from '../MockData/IngList'

function SearchResults (props) {
    let displayResults
    const ingredientList = useFetch('http://localhost:3001/ingredients')
    const searchQuery = props.query.trim().toLowerCase()

    const results = 
    ingredientList.filter(ingredient => 
        ingredient.name.includes(searchQuery) || 
        ingredient.effects.includes(searchQuery))

    if (!props.query) {
        displayResults = (ingredientList.map(ingredient => (
            <article>
                <p>{ingredient.name}</p>
                <ul>
                <li>{ingredient.effects[0]}</li>
                <li>{ingredient.effects[1]}</li>
                <li>{ingredient.effects[2]}</li>
                <li>{ingredient.effects[3]}</li>
                </ul>
            </article>
        )))
    } else if (results.length > 0) {
        displayResults = (results.map(ingredient => (
            <article>
                <p>{ingredient.name}</p>
                <ul>
                <li>{ingredient.effects[0]}</li>
                <li>{ingredient.effects[1]}</li>
                <li>{ingredient.effects[2]}</li>
                <li>{ingredient.effects[3]}</li>
                </ul>
            </article>
        )))
    } else {
        displayResults = (<p>No matching results</p>)
    }

    return (
        <section>
        {/* {loading && <p>Loading</p>}
        {error && <p>There was an error, please try again later.</p>} */}
        {ingredientList && <div>{displayResults}</div>}
        </section>
    )
}

export default SearchResults