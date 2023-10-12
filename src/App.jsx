import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/IndexComponent'
import { MovieList } from './routes/IndexRoutes'

function App() {

  const popularConfig = {
    pageTitle: 'Popular',
    initialUrl: 'discover/movie'
  }
  const topRatedConfig = {
    pageTitle: 'Top Rated',
    initialUrl: 'movie/top_rated'
  }
  const UpComingConfig = {
    pageTitle: 'Up Coming',
    initialUrl: 'movie/upcoming'
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MovieList config={popularConfig} />} />
          <Route exact path='/toprated' element={<MovieList config={topRatedConfig} />} />
          <Route exact path='/upcoming' element={<MovieList config={UpComingConfig} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
