import { createContext, useState } from 'react'

const FavouritesContext = createContext({
    favourites: []
})

export function FavouritesContextProvider (props) {
    const [favouriteItems, setFavouriteItems] = useState([])

    const context = {
        favourites: favouriteItems,
        addFavourite: handleAddFavourite,
        removeFavourite: handleRemoveFavourite,
        checkIsFavourite: handleFavouriteCheck
    }

    function handleAddFavourite (favouriteItem) {
        setFavouriteItems((prevFavouriteItems) => {
            return prevFavouriteItems.concat(favouriteItem)
        })
    }

    function handleRemoveFavourite (itemId) {
        setFavouriteItems((prevFavouriteItems) => {
            return prevFavouriteItems.filter(item => item.id !== itemId)
        })
    }

    function handleFavouriteCheck (itemId) {
        return favouriteItems.some(item => item.id === itemId)
    }

    function setLocalStorage () {}

    function getLocalStorage() {}

    return (<FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>)
}

export default FavouritesContext