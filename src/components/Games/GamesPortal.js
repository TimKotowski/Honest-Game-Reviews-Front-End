import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGames } from '../../store/games';
import {
  Card,
  Icon,
  Image,
  Rating,
  Container,
} from 'semantic-ui-react';
import GamesMenuBar from './GamesMenuBar';

const GamesPortal = () => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, []);

  return (
    <Container>
      <style>
        {`
      html, body {
        background-color: #0e0e0f !important;
      }
      color {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
    `}
      </style>

      <GamesMenuBar />
      <Card.Group>
        {games.map((game) => (
          <Card
            key={game.id}
            color="black"
            style={{
              marginTop: '15px',
              marginBottom: '20px',
              maxWidth: '240px',
            }}
          >
            <Image src={game.game_image} size="large" />
            <Card.Header style={{ marginTop: '8px' }}>
              {game.game_title}
            </Card.Header>
            <Card.Meta style={{ marginTop: '1px' }}>{game.company}</Card.Meta>
            <Card.Description style={{ textAlign: 'left', marginTop: '8px' }}>
              {game.metacritic >= 75 ? (
                <Card.Content>
                  <Icon color="green" name="circle" />
                  Metacritic Score: {game.metacritic}
                </Card.Content>
              ) : (
                <Card.Content>
                  <Icon color="red" name="circle" />
                  Metacritic Score: {game.metacritic}
                </Card.Content>
              )}
            </Card.Description>

            <Card.Content extra>
              <a>
                <Rating icon="star" defaultRating={game.rating} maxRating={5} />
                Rating
              </a>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};
export default GamesPortal;
