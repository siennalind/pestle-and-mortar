import { useContext } from 'react'
import FavouritesContext from '../store/fav-context'

function Favourites () {
    const favContext = useContext(FavouritesContext)

    return (
        <>
            {favContext.favourites.map(item => (
                <p>{item.name}</p>
            ))}
        </>
    )
}

export default Favourites