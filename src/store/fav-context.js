import { createContext, useState, useEffect } from 'react'

const FavouritesContext = createContext({
    favourites: []
})

export function FavouritesContextProvider (props) {
    const [favouriteItems, setFavouriteItems] = useState(() => getLocalStorage("favourite", []))

    useEffect(() => {
        setLocalStorage("favourite", favouriteItems);
      }, [favouriteItems]);

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

    function setLocalStorage (key, value) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch(error) {
            console.log(error)
        }
    }

    function getLocalStorage(key, initialValue) {
        try {
            const value = window.localStorage.getItem(key)
            return value ? JSON.parse(value) : initialValue
        } catch (error) {
            return initialValue
        }
    }

    return (<FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>)
}

export default FavouritesContext