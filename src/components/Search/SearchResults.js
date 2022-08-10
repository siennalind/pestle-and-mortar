import { useState } from 'react'
import IngList from '../MockData/IngList'

function SearchResult (props) {
    let displayResults
    const [ingredientList, setIngredientList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const searchQuery = props.query.trim().toLowerCase()

    setIngredientList(IngList)

    const results = ingredientList.filter(ingredient => 
        ingredient.name.includes(searchQuery) ||
        ingredient.effect.includes(searchQuery)
    )

    if (!props.query) {
        displayResults = (ingredientList.map(ingredient => {
            <article>
                <p>{ingredient.name}</p>
                <ul>
                    <li>{ingredient.effects[0]}</li>
                    <li>{ingredient.effects[1]}</li>
                    <li>{ingredient.effects[2]}</li>
                    <li>{ingredient.effects[3]}</li>
                </ul>
            </article>
        }))
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
            {loading && <p>Loading</p>}
            {error && <p>There was an error, please try again later</p>}
        </section>
    )
}

export default SearchResult