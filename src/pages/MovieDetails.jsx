import { NavLink } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <div>
      <button>Goback</button>
      <img src="" alt="" />
      <div></div>
      <div>
        <p>Additional information</p>
        <nav>
          <NavLink to="/movies/:movieId/cast">Cast</NavLink>
          <NavLink to="/movies/:movieId/revies">Reviews</NavLink>
        </nav>
      </div>
    </div>
  );
}
