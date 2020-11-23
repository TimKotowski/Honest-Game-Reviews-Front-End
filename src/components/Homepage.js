import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Segment,
  Divider,
  Card,
  CardGroup,
} from 'semantic-ui-react';
import Connor from '../images/connor.jpg';
import { NavLink } from 'react-router-dom';

const source = [
  'https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg',
  'https://static-cdn.jtvnw.net/ttv-boxart/Among%20Us-285x380.jpg',
  'https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Black%20Ops%20Cold%20War-285x380.jpg',
];

const Homepage = ({ mobile }) => {
  return (
    <>
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 600,
          padding: '1em 0em',
          backgroundColor: '#18181c  ',
        }}
        vertical
      >
        <Container text>
          <style>
            {`
      html, body {
        background-color: #0e0e0f !important;
      }
      #text1{
        color: white;
    }

    `}
          </style>
          <Header
            as="h1"
            content="Honest Game Review"
            inverted
            style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
              marginBottom: 0,
              marginTop: mobile ? '1.5em' : '3em',
            }}
          />
          <Header
            as="h2"
            content="Sign up to get started"
            inverted
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
              marginTop: mobile ? '0.5em' : '1.5em',
            }}
          />
          <Button
            as={NavLink}
            exact
            to="/games"
            inverted
            size="huge"
            style={{ color: '#772ce7', textColor: '#fffff' }}
          >
            Get Started
            <Icon name="right arrow" />
          </Button>
        </Container>
      </Segment>

      <Segment style={{ padding: '8em 0em', marginTop: '-100px' }} vertical>
        <Container text>
          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ margin: '2em 0em', textTransform: 'uppercase' }}
          >
            <Header style={{ color: '#772ce7' }}>
              Starting Finding The Right Games
            </Header>
          </Divider>

          <p id="text1" style={{ fontSize: '1.33em' }}>
            We have provided a reviewing platform where your time matters and so
            does your money. With the in-depth review system, you can browse
            games that match your needs. Don't waste your money find a game now!
          </p>
          <Button as={NavLink} position="left" exact to="/games" size="large">
            Search Games
          </Button>

          <Divider
            as="h2"
            className="header"
            horizontal
            style={{ textTransform: 'uppercase' }}
          >
            <Header style={{ color: '#772ce7' }}>
              Current Highest Played Games
            </Header>
          </Divider>

          <CardGroup itemsPerRow={3}>
            {source.map((s) => (
              <Card color="purple" style={{ color: '#772ce7' }} image={s} />
            ))}
          </CardGroup>

          <Divider
            as="h2"
            className="header"
            horizontal
            style={{
              margin: '2em 0em',
              textTransform: 'uppercase',
              marginTop: '90px',
            }}
          >
            <Header style={{ color: '#772ce7' }}>
              Wanna keep up on the latest news
            </Header>
          </Divider>
          <p id="text1" style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true, we provided a
            real in time news feature update where the latest gaming news is
            right here for your leasiure!
          </p>
          <Button as="a" size="large">
            Search News!
          </Button>
        </Container>
      </Segment>
    </>
  );
};

export default Homepage;
