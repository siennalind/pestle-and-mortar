import { useContext } from 'react'
import FavouritesContext from '../store/fav-context'

function Favourites () {
    const favContext = useContext(FavouritesContext)

    return (
        <>
            {favContext.favourites.map(item => (
                <article>
                <p>{item.name}</p>
                <p>{item.firstEffect}</p>
                <p>{item.secondEffect}</p>
                <p>{item.thirdEffect}</p>
                <p>{item.fourthEffect}</p>
                </article>
            ))}
        </>
    )
}

export default Favourites