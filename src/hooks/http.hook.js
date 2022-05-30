import { useCallback, useState } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        /* body = JSON.stringify(body)
         * headers['Content-Type'] = 'application/json'
         * headers['Content-Type'] = 'multipart/form-data'
         * */
      }
      const responce = await fetch(url, {
        method,
        body,
        headers,
      })
      const data = await responce.json()
      if (!responce.ok) {
        throw new Error(data.message || 'Something was going wrong')
      }
      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  return {
    loading,
    error,
    request,
    clearError,
  }
}
