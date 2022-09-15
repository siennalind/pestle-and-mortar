import { useState } from 'react'
import Button from './Button'
import IngList from './MockData/IngList'

function Favourites () {
    const [favouritesList, setFavouritesList] = useState([])

    return (
        {favouritesList}
    )
}

export default Favourites