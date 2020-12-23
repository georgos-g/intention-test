//import Page from '../components/page';
import { gql, graphql } from 'react-apollo';
import withData from '../apollo/withData';
//import Nav from '../components/nav';




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
  <div>
    <h1>Bonn Hbf</h1>
    <ul>
      {/* <li>Name: {JSON.stringify(stationWithEvaId.name)}</li> */}

      <li>Latitude: {stationWithEvaId.location.latitude}</li>
      <li>Longitude: {stationWithEvaId.location.longitude}</li>
      <li>Station Nr.: {stationWithEvaId.stationNumber}</li>
      <img src={stationWithEvaId.picture.url}></img>
    </ul>
  </div>
);

const GraphqlIndex = graphql(query)(index);
export default withData(GraphqlIndex);
