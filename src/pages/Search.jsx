import { useEffect } from 'react'
import { Link } from '../Link'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Search: ${routeParams.query}`
  }, [])

  return (
    <>
      <h1>Search: {routeParams.query}</h1>
      <Link to='/'>Go to Home page</Link>
    </>

  )
}
