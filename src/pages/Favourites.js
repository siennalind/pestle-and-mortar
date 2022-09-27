import { useContext } from 'react'
import FavouritesContext from '../store/fav-context'
import styles from '../styles/Items.module.css'

function Favourites () {
    const favContext = useContext(FavouritesContext)

    return (
        <>
            {favContext.favourites.map(item => (
                <li key={item.id}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.info}>{item.firstEffect}</p>
                <p className={styles.info}>{item.secondEffect}</p>
                <p className={styles.info}>{item.thirdEffect}</p>
                <p className={styles.info}>{item.fourthEffect}</p>
                </li>
            ))}
        </>
    )
}

export default Favourites