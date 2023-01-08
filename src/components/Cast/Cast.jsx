import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb.services';
import { Photo } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const createMovie = async () => {
      await getMoviesId({ movieId: movieId, detail: '/credits' }).then(
        setMovieCast
      );
    };
    createMovie();
  }, []);
  if (!movieCast) {
    return;
  }
  return (
    <div>
      <ul>
        {movieCast.cast.map(({ name, character, id, profile_path }) => (
          <li key={id}>
            <Photo
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
