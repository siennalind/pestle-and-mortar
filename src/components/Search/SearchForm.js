import { useState } from 'react'
import SearchResults from './SearchResults'
import Button from '../Button'

function SearchForm () {
    const [userQuery, setUserQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userQuery.trim().toLowerCase())
    }

    const handleChange = (e) => {
        setUserQuery(e.target.value)
    }

    const handleClear = (e) => {
        e.target.value('')
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="query">Search:</label>
                <input id="query" type="search"
                 placeholder="Enter search here" 
                 onChange={handleChange} />
                <SearchResults query={userQuery} />
            </form>
        </section>
    )
}

export default SearchForm