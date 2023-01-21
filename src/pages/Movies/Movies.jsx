import { Box } from 'components/Box.styled';
import MoviesSearchForm from 'pages/Movies/MoviesSearchForm/MoviesSearchForm';
import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'services/themoviedb.services';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    const requestMoviesList = async () => {
      const data = await getSearchMovies({
        query: searchParams.get('query'),
      }).then();
      return setMoviesList(data.results);
    };
    requestMoviesList();
  }, [searchParams]);

  const createSearchParams = movies => {
    setSearchParams({ query: movies });
  };

  return (
    <>
      <Box>
        <MoviesSearchForm
          onSubmitForm={createSearchParams}
          searchParams={searchParams.get('query') ?? ''}
        />
      </Box>

      {moviesList !== '' && (
        <ul>
          {moviesList.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {/* {movies.length === 0 && <h2>not a valid search value</h2>} */}
    </>
  );
}
