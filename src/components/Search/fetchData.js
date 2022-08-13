import { useState } from 'react'

function fetchData (URL) {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(URL)
        .then(response => {
            setData(response.data)
        })
        .catch(err => { setError(true) })
        .finally(() => { setLoading(false) })
    }, [])

    return (
        data
    )
}

export default fetchData