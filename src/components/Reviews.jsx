import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb.services';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    console.log(movieId);
    const createMovie = async () => {
      const data = await getMoviesId({
        movieId: movieId,
        detail: '/reviews',
      }).then();
      console.log(data);

      return setMovieReviews(data);
    };
    createMovie();
    console.log(movieReviews);
  }, []);
  if (!movieReviews) {
    return;
  }
  // console.log(movieReviews);
  return (
    <div>
      {/* <ul>
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
      </ul> */}
    </div>
  );
}
