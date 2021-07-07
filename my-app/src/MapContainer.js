import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';


const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40.78037895055317, lng: -73.96338565497243
  }
  
  return (
    <div className="MapContainer">
     <LoadScript 
       googleMapsApiKey = 'AIzaSyAeqMTNQwSfYJ18bza0h4rI3C3z8H-6IQg'>
        <GoogleMap
          
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
     </div>
  )
}
export default MapContainer;
