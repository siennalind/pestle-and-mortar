import { useState, useEffect } from 'react';
import axios from 'axios'

const useFetch = (URL) => {
    const [data , setData] = useState([])

    useEffect(() => {
        axios.get(URL)
            .then(response => setData(response.data))
    })

    return data;
}

export default useFetch