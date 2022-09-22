import useFetch from './useFetch'
import IngList from '../MockData/IngList'
import IngredientList from '../ingredients/IngredientList'

function SearchResults (props) {
//    let displayResults
//    const ingredientList = useFetch('http://localhost:3001/ingredients')
//    const searchQuery = props.query.trim().toLowerCase()

    // const results = 
    // IngList.filter(ingredient => 
    //     ingredient.name.includes(searchQuery) || 
    //     ingredient.effects.includes(searchQuery))

    // if (!props.query) {
    //     displayResults = (IngList.map(ingredient => (
    //         <Card 
    //             id={ingredient.id}
    //             name={ingredient.name}
    //             firstEffect={ingredient.effects[0]}
    //             secondEffect={ingredient.effects[1]}
    //             thirdEffect={ingredient.effects[2]}
    //             fourthEffect={ingredient.effects[3]}
    //         />
    //     )))
    // } else if (results.length > 0) {
    //     displayResults = (results.map(ingredient => (
    //         <Card 
    //             key={ingredient.id}
    //             name={ingredient.name}
    //             firstEffect={ingredient.effects[0]}
    //             secondEffect={ingredient.effects[1]}
    //             thirdEffect={ingredient.effects[2]}
    //             fourthEffect={ingredient.effects[3]}
    //         />
    //     )))
    // } else {
    //     displayResults = (<p>No matching results</p>)
    // }

    return (
        <section>
        <IngredientList  />
        </section>
    )
}

export default SearchResults