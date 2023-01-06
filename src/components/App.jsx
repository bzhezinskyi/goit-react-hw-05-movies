import {
  getTrending,
  getSearchMovies,
  getMoviesDetails,
  getMoviesCredits,
  getMoviesReviews,
} from 'services/themoviedb.services';

// const onClick = console.log(getTrending());

export default function App() {
  return (
    <div>
      <button
        onClick={() => {
          getTrending();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          getSearchMovies({ query: 'lion', page: 2 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          getMoviesDetails({ movieId: 76600 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          getMoviesCredits({ movieId: 76600 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          getMoviesReviews({ movieId: 76600 });
        }}
      >
        +
      </button>
    </div>
  );
}
