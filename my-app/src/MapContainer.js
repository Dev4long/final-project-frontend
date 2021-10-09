import React, {useState} from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './App.css';



const MapContainer = (props) => {
  



  let lat = props.events.map(event => event.lat)

  let lng = props.events.map(event => event.lng)

  const [ place, setPlace ] = useState(null);

  const [ selected, setSelected ] = useState([]);
  
  console.log(selected)
  const onSelect = item => {
    setSelected(item)
    console.log(item);
  }



  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
      lat: 40.78037895055317, lng: -73.96338565497243
  }

  return (



    <div className="MapContainer">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>


            {props.events.map(item => { 
              console.log(item.id)
              return (
              <Marker key={item.location} description= {item.description} position={{lat: item.lat , lng: item.lng}} onClick={() => onSelect(item
              )}
                >
                {   selected.location && 
              <InfoWindow
                key={item.location}
                position={{lat: item.lat , lng: item.lng}}
                clickable={true}
                onCloseClick={() => setSelected({})}>
                  <div className = "mapDiv">
                  <img alt="event" className = "mapImage" src={item.image}/>
                  <br></br>
                    Meet-up:{item.location}
                    <br></br>
                    Description:{item.description}
                    <br></br>
                    Time:{item.time}
                    <br></br>
                    Date:{item.date.slice(0, 10)}
                  </div>
                  
                </InfoWindow>}
              </Marker>
              )
            })
         }
      

        </GoogleMap>

    </div>
  )

}
 export default MapContainer;