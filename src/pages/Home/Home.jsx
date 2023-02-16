import { HomeElement } from './Home.styled';
import { getTrending } from 'services/themoviedb.services';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

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
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {trandingList.map(movie => {
          return (
            <Col key={movie.id}>
              <Card>
                <Link to={`/movies/${movie.id}`}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                      <>User Score : {movie.vote_average.toFixed(1)}</>
                    </Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </HomeElement>
  );
}
