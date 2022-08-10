import { useState } from 'react'
import SearchResults from './SearchResults'

function SearchForm() {
    const [userQuery, setUserQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userQuery.trim().toLowerCase())
    }

    const handleChange = (e) => {
        setUserQuery(e.target.value)
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
            <label htmlFor="query">Search</label>
            <input id="query" type="search" onChange={handleChange} 
                placeholder="Enter search term" />
            <input type="submit" value="Search" />
            </form>
        </section>
    )
}

export default SearchForm