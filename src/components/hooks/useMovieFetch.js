import { useState, useEffect, useCallback } from 'react'

import { API_KEY, API_URL } from '../../config'

export const useMovieFetch = movieId => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = useCallback(async () => {
    setError(false)
    setLoading(true)

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
      const result = await (await fetch(endpoint)).json()
      console.info('result', result)

      const creditsEndpoint = `{}`

    } catch (error) {
      setError(true)
    }
    setLoading(false)

  }, [movieId])


}