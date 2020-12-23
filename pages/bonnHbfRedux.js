import Page from '../components/page';
import { useSelector, useDispatch } from 'react-redux'

import { gql, graphql } from 'react-apollo';
import withData from '../apollo/withData';



const useStationFinder = () => {
  const stationWithEvaId = useSelector((state) => state.stationWithEvaId)
  const dispatch = useDispatch()
  
  const latitude = () =>
    dispatch({
      type: 'LATITUDE',

    })
  
    const longitude = () =>
    dispatch({
      type: 'LONGITUDE',
    })
  
    const stationnumber = () =>
    dispatch({
      type: 'STATIONNUMBER',
    })

    const url = () =>
    dispatch({
      type: 'URL',
    })

  return {stationWithEvaId, latitude, longitude, stationnumber, url 
  
  }
  
}



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

  
  const index =({  })=>{
   const {stationWithEvaId, latitude, longitude, stationnumber, url } = useStationFinder()

    return (
  

  <div>
    <h1>Bonn Hbf</h1>
    <ul>
     
      <li>Latitude: {latitude}</li>
      <li>Longitude: {longitude}</li>
      <li>Station Nr.: {stationnumber}</li>
      <img src={url}></img>
    </ul>
  </div>
)
  };


(
  <div>
    <h1>Bonn Hbf</h1>
    <ul>
      {/* <li>Name: {JSON.stringify(stationWithEvaId.name)}</li> */}
{/* 
      <li>Latitude: {stationWithEvaId.location.latitude}</li>
      <li>Longitude: {stationWithEvaId.location.longitude}</li>
      <li>Station Nr.: {stationWithEvaId.stationNumber}</li>
      <img src={stationWithEvaId.picture.url}></img> */}
    </ul>
  </div>
);


const GraphqlIndex = graphql(query)(index);

export default withData(GraphqlIndex);






