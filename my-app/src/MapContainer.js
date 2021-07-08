import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default MapContainer;
// const MapContainer = () => {
  
//   const mapStyles = {        
//     height: "100vh",
//     width: "100%"};
  
//   const defaultCenter = {
//     lat: 40.78037895055317, lng: -73.96338565497243
//   }
  
//   return (
//     <div className="MapContainer">
//      <LoadScript 
//        googleMapsApiKey = 'AIzaSyAeqMTNQwSfYJ18bza0h4rI3C3z8H-6IQg'>
//         <GoogleMap
          
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={defaultCenter}
        
          
//         />
        
//      </LoadScript>
//      </div>
//   )
// }
// export default MapContainer;
