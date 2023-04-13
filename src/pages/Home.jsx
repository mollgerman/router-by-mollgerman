import { Link } from '../Link'
export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Sample page for react router creation from scratch</p>
      <Link to='/about'>About me</Link>
    </>
  )
}
