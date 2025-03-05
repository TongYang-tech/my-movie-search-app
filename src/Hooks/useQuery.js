import { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetPlaceholder = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url)
        const data = response.data
        setData(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [url])
  return { data, loading, error }
}
