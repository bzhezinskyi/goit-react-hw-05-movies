import MoviesSearchForm from 'components/MoviesSearchForm/MoviesSearchForm';
import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/themoviedb.services';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState('');

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
    <div>
      <MoviesSearchForm
        onSubmitForm={createSearchParams}
        searchParams={searchParams.get('query') ?? ''}
      />
      {moviesList !== '' && (
        <ul>
          {moviesList.map(({ title, id }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
      {/* {movies.length === 0 && <h2>not a valid search value</h2>} */}
    </div>
  );
}
