import { Box } from 'components/Box.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb.services';
import { Container, Poster, StyledLink } from './MovieDetails.styled';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'revies', text: 'Reviews' },
];

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const createMovie = async () => {
      await getMoviesId({ movieId: movieId }).then(setMovie);
    };
    createMovie();
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <div>
      <Box>
        <button>Goback</button>
      </Box>

      <Box>
        <Container>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>
              {movie.title} ({movie.release_date})
            </h2>
            <p>User Score : {movie.vote_average}</p>
            <h3>Overviev</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </Container>
      </Box>

      <Box>
        <p>Additional information</p>
        <>
          {navItems.map(({ href, text }) => (
            <StyledLink key={href} to={href}>
              {text}
            </StyledLink>
          ))}
        </>
      </Box>
      <Outlet />
    </div>
  );
}
