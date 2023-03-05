import { useContext } from 'react'
import FavouritesContext from '../../store/fav-context'
import styles from '../../styles/Items.module.css'

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
        <li className={styles.item} key={props.id}>
            <p className={styles.name}>{props.name}</p>
                <p className={styles.info}>{props.firstEffect}</p>
                <p className={styles.info}>{props.secondEffect}</p>
                <p className={styles.info}>{props.thirdEffect}</p>
                <p className={styles.info}>{props.fourthEffect}</p>
            <button className={styles.btn} onClick={toggleFavourite}>
                {itemIsFavourite ? 'Unfavourite' : 'Favourite'}
            </button>
        </li>
    )
}

export default IngredientItem