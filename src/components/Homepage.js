import React from 'react';
import {
  Container,
  Header,
  Button,
  Icon,
  Segment,
  Grid,
  Image,
  Divider
} from 'semantic-ui-react';
import Connor from '../images/connor.jpg'

const Homepage = ({ mobile }) => {
  return (
    <>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <Container text>
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
          <Button primary size="huge">
            Get Started
            <Icon name="right arrow" />
          </Button>
        </Container>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "One of the best and most non liberal gaming sites"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image size='small' avatar src={Connor} />
                 Chief Of Chads
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>



      <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>


    </>
  );
};

export default Homepage;
