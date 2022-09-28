import styles from '../../styles/List.module.css'
import IngredientItem from "./IngredientItem"

function IngredientList (props) {
//    const ingredientList = IngList
    // useFetch('http://localhost:3001/ingredients' 

    return (
        <ul className={styles.container}>
            {props.ingredientList.map(ingredient => 
            <IngredientItem 
                key={ingredient.id}
                id={ingredient.id}
                name={ingredient.name}
                firstEffect={ingredient.effects[0]}
                secondEffect={ingredient.effects[1]}
                thirdEffect={ingredient.effects[2]}
                fourthEffect={ingredient.effects[3]}
             />)}
        </ul>
    )
}

export default IngredientList