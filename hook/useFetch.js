import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useEffect(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': 'b20edb88aamshd1d5aad8e356054p1c9eadjsn0f0989c9e39b',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options)
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }
}

export default useFetch