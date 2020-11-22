import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllGames } from '../../store/games';
import { Card, Icon, Image, Rating, Button } from 'semantic-ui-react';
import GamesMenuBar from './GamesMenuBar'
// import GamesPagination from './GamesPagination'

const GamesPortal = () => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, []);

  console.log('success', games);
  return (
    <>
    <GamesMenuBar

    />
    <Card.Group>
      {games.map((game) => (
        <Card color="blue"
        style={{  marginTop: "2em" }}
        >
          <Card.Content   >
            <Image src={game.game_image} size="large" />
            <Card.Header>{game.game_title}</Card.Header>
            <Card.Meta>{game.company}</Card.Meta>
            <Card.Description>
              {game.metacritic >= 75 ? (
                <Card.Content>
                  <Icon color="green" name="circle" />
                  Metacrtic Score: {game.metacritic}
                </Card.Content>
              ) : (
                <Card.Content>
                  <Icon color="red"  name="circle" />
                  Metacrtic Score: {game.metacritic}
                </Card.Content>
              )}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <Button size="mini" color="blue">
            Review
          <Icon name="right arrow" />
          </Button>
      </Card.Content>
          <Card.Content extra>
            <a>
              <Rating icon="star" defaultRating={game.rating} maxRating={5} />
              Rating
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
      </>
  );
};
export default GamesPortal;
