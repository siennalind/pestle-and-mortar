import { useContext } from 'react'
import FavouritesContext from '../../store/fav-context'

function IngredientItem (props) {
    const favContext = useContext(FavouritesContext)
    const itemIsFavourite = favContext.checkIsFavourite(props.id)

    const toggleFavourite = () => {
        if (itemIsFavourite) {
            favContext.removeFavourite(props.id)
        } else {
            favContext.addFavourite({
                key: props.id,
                id: props.id,
                name: props.name,
                firstEffect: props.firstEffect,
                secondEffect: props.secondEffect,
                thirdEffect: props.thirdEffect,
                fourthEffect: props.fourthEffect
            })
        }
    }

    return (
        <li key={props.id}>
            <p>{props.name}</p>
                <p>{props.firstEffect}</p>
                <p>{props.secondEffect}</p>
                <p>{props.thirdEffect}</p>
                <p>{props.fourthEffect}</p>
            <button onClick={toggleFavourite}>
                {itemIsFavourite ? 'Remove' : 'Favourite'}
            </button>
        </li>
    )
}

export default IngredientItem