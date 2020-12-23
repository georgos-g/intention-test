//import Page from '../components/page';
import { gql, graphql } from 'react-apollo';
import withData from '../apollo/withData';
import Navbar from '../components/navbar';




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
<Navbar/>
const index = ({ data: { stationWithEvaId } }) => (
 <div className=''>
   
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
export default withData(GraphqlIndex) ;