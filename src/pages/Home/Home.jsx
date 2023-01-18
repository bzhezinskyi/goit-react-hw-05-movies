import { HomeElement } from './Home.styled';
import { getTrending } from 'services/themoviedb.services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [trandingList, setTrandingList] = useState();

  useEffect(() => {
    const createTrandingList = async () => {
      const data = await getTrending().then();
      return setTrandingList(data.results);
    };
    createTrandingList();
  }, []);

  if (!trandingList) {
    return;
  }

  return (
    <HomeElement>
      <h1>Trending todey</h1>
      <ul>
        {trandingList.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </HomeElement>
  );
}
