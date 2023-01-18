import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import MovieDetails from 'pages/Movies/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import Cast from './pages/Movies/Cast/Cast';
import Reviews from './pages/Movies/Reviews/Reviews';
import Layout from 'components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="revies" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}
