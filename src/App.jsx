import { lazy, Suspense } from 'react'
import './App.css'
import Router from './Router'
import { Route } from './Route'
const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const SearchPage = lazy(() => import('./pages/Search'))

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/search/:query' Component={SearchPage} />
        </Router>
      </Suspense>

    </main>
  )
}

export default App
