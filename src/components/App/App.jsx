import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Cast from '../Cast';
import Reviews from '../Reviews';

import { StyledLink } from './App.styled';

export default function App() {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/revies" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}
