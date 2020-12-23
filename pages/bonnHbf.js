import Page from '../components/page';
import { gql, graphql } from 'react-apollo';
import withData from '../apollo/withData';
import NavbarReact from '../components/navbar';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const query = gql`
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
`;


const index = ({ data: { stationWithEvaId } }) => (
  <div >
    <Container>

    
    <h1>BONN HBF</h1>
    <ul>
      {/* <li>Name: {JSON.stringify(stationWithEvaId.name)}</li> */}

      <li>Latitude: {stationWithEvaId.location.latitude}</li>
      <li>Longitude: {stationWithEvaId.location.longitude}</li>
      <li>Station Nr.: {stationWithEvaId.stationNumber}</li>
      <img src={stationWithEvaId.picture.url}></img>
    </ul></Container>

    <style jsx>{`
                  h1 {
                    margin-top: 50px;
                    margin-bottom: 30px;
                    text-align: center;
                  }
                  img {
                    display: block;
                    margin-top:30px;
                    margin-left: auto;
                    margin-right: auto;
                    width: 100%;
                  }
                
                  li {

                    text-align: center;
                    list-style: none;
                    
                  }


                `}</style>


 
  </div>
);

const GraphqlIndex = graphql(query)(index);
export default withData(GraphqlIndex);
