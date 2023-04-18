import { useEffect } from 'react'
import { Link } from '../Link'
export default function AboutPage () {
  useEffect(() => {
    document.title = 'About'
  }, [])
  return (
    <>
      <h1>About me</h1>
      <p>Sample page for react router creation from scratch</p>
      <Link to='/'>Home</Link>
    </>
  )
}
