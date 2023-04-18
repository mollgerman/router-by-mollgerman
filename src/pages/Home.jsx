import { useEffect } from 'react'
import { Link } from '../Link'
export default function HomePage () {
  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <>
      <h1>Home</h1>
      <p>Sample page for react router creation from scratch</p>
      <Link to='/about'>About me</Link>
      <Link to='/search/write-here'>Search page</Link>
      <p>Use Inspect: Network to see how the page is not dowloading everything again when switching pages</p>
    </>
  )
}
