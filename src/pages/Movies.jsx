import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/themoviedb.services';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState('');

  const handleSubmitForm = event => {
    event.preventDefault();
    if (searchValue === '') {
      return;
    }
    const moviesList = async () => {
      const data = await getSearchMovies({ query: searchValue }).then();
      return setMovies(data.results);
    };
    moviesList();
    setSearchParams({ query: searchValue });
    console.log(searchParams);
  };
  const handleChangeForm = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input type="text" value={searchValue} onChange={handleChangeForm} />
        <button disabled={searchValue === ''}>Search</button>
      </form>
      {movies !== '' && (
        <ul>
          {movies.map(({ title, id }) => {
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
