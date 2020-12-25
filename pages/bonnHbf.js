import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Page from '../components/page';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function BonnHbf({ stationWithEvaId }) {
  return (
    <>
      <Page />
      <div>
        <Container>
          <Row>
            <Col>
              <ul className='jumbotron'>
                <h2>{JSON.stringify(stationWithEvaId.name)}</h2>
                <li>Latitude: {stationWithEvaId.location.latitude}</li>
                <li>Longitude: {stationWithEvaId.location.longitude}</li>
                <li>Station Nr.: {stationWithEvaId.stationNumber}</li>
              </ul>
            </Col>
          </Row>

          <Image src={stationWithEvaId.picture.url} rounded fluid></Image>
        </Container>

        <style jsx>{`
          h2 {
            // margin-top: 40px;
            // margin-bottom: 10px;
            text-align: center;
          }

          li {
            list-style: none;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://bahnql.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        stationWithEvaId(evaId: 8000044) {
          stationNumber
          name
          location {
            latitude
            longitude
          }
          picture {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      stationWithEvaId: data.stationWithEvaId,
    },
  };
}
