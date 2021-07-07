import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';


const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
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
