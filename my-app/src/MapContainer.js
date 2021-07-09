import React, { Component, useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './App.css';





const MapContainer = () => {
  
  const apiKey = 'AIzaSyAeqMTNQwSfYJ18bza0h4rI3C3z8H-6IQg'

  const [ place, setPlace ] = useState(null);

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }


  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40.78037895055317, lng: -73.96338565497243
  }
  
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 40.78037895055317,
        lng: -73.96338565497243
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 40.77902385628993, 
        lng: -73.92055908679092
      },
    },
  ];
  return (
    <div className="MapContainer">
     <LoadScript 
       googleMapsApiKey = 'AIzaSyAeqMTNQwSfYJ18bza0h4rI3C3z8H-6IQg'>
         <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)}/>
              )
            })
         }
         {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
         
     </GoogleMap>
        
        {/* <GoogleApiComponent
        apiKey={apiKey}
        language={'en'}
        country={'country:in|country:us'}
        cordinates={true}
        locationBoxStyle={'custom-style'}
        locationListStyle={'custom-style-list'}
        onChange={(e) =>{setPlace({place:e})}}/> */}
       
     </LoadScript>
     </div>
  )
}
export default MapContainer;
