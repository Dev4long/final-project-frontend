import React, {useState} from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './App.css';



const MapContainer = (props) => {
  


console.log(props.events)

  let lat = props.events.map(event => event.lat)
  console.log(lat)
  let lng = props.events.map(event => event.lng)
  console.log(lng)

  const [ place, setPlace ] = useState(null);

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }


  const LocationMarker = [{
    name:"events",
    location: {
      lat: lat,
      lng: props.events.map(event => event.lng)
    }
  }]

  console.log(LocationMarker)



  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
      lat: 40.78037895055317, lng: -73.96338565497243
  }
  console.log(defaultCenter)

 
  return (



    <div className="MapContainer">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>


            {props.events.map(item => {
              return (
              <Marker key={item.location} description= {item.description} position={{lat: item.lat , lng: item.lng}} onClick={() => onSelect(item)}
                >
                {   selected.location && 
              <InfoWindow
                key={`infowindow${item.location}`}
                // visible={true}
                position={{lat: item.lat , lng: item.lng}}
                clickable={true}
                onCloseClick={() => setSelected({})}>
                  <div>
                    Ride staring location:{item.location}
                    <br></br>
                    Ride description:{item.description}
                    <br></br>
                    event starts:{item.time}
                  </div>
                  
                </InfoWindow>}
              </Marker>
              )
            })
         }
         {/* {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.location}</p>
            </InfoWindow>
            )
         } */}
      

        </GoogleMap>

    </div>
  )

}
 export default MapContainer;