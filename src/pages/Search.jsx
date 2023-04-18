import { useEffect } from 'react'
import { Link } from '../Link'

export default function SearchPage ({ routeParams }) {
  useEffect(() => {
    document.title = `Search: ${routeParams.query}`
  }, [])

  return (
    <>
      <h1>Search: {routeParams.query === 'write-here' ? 'none' : routeParams.query}</h1>
      <h5>(Write search through params)</h5>
      <Link to='/'>Go to Home page</Link>
    </>

  )
}
