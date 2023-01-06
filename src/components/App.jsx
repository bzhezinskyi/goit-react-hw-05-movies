import { getTrending, getSearchMovies } from 'services/themoviedb.services';

const onClick = console.log(getTrending());

export default function App() {
  return (
    <div>
      <button onClick={getSearchMovies}>+</button>
    </div>
  );
}
