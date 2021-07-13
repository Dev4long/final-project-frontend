import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css"

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';



function EventsForm(props) {
    let [description, setDescription] = useState("")
    let [selectedDate, setSelectedDate] = useState("");
    let [time, onChange] = useState('12:00');
    let [image, setImage] = useState("")
    let [location, setLocation] = useState("")
    
    const[address, setAdress] =React.useState("")
    const[coordinates, setCoordinates]= React.useState({lat:null, lng:null})

    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      const latLng = await getLatLng(results[0]);
      setAdress(value);
      setCoordinates(latLng)
      console.log(latLng)

      console.log(value)

      console.log(coordinates.lat)
      console.log(coordinates.lng)
    }
  

    let handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/events', {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${localStorage.token}`
          },
          body: JSON.stringify({
            description: description,
            image: image,
            location: address,
            time: time,
            date: selectedDate,
            user_id: props.userInfo.id,
            lat: coordinates.lat,
            lng: coordinates.lng
            

          })
        })
          .then(res => res.json())
          .then(newEvent => {
            props.addEvent(newEvent)
            console.log(newEvent)
            setDescription("")
            setSelectedDate("")
            onChange("")
            setImage("")
            setAdress("")
            alert("Event posted")
          })
    }
  //  console.log(props.mySessions.sessions)
      // console.log(props.trainer)

       

        return (


            
          



            <div className="eventForm">


            
          <form onSubmit={handleSubmit} className="add-session-form" >
            <h3>Create event</h3>
            <br></br>

            
            <strong>Event description</strong>
            <br></br>
            <textarea placeholder="Enter event description" onChange={(e) => {setDescription(e.target.value)}}></textarea>
            <br></br>
            <strong>Event Image</strong>
            <br></br>
            <input placeholder="Enter pic url" onChange={(e) => {setImage(e.target.value)}}></input>
            <br></br>
            <strong>Event Location</strong>
            <br></br>
            <div>
  <PlacesAutocomplete
   
   value={address} 
   onChange={setAdress} 
   onSelect={handleSelect}>
  {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
    <div className = "autocomplete">
      <input {...getInputProps({placeholder: "address"})} />
      <div>
        {loading ? <div>...loading</div>: null}
        {suggestions.map((suggestion) => {
          const style = {
            backgroundColor: suggestion.active ? "#DC143C": "#fff"
          }
          // console.log(suggestion)

          return <div {...getSuggestionItemProps(suggestion, {style})}>
            {suggestion.description}
            </div>
        })}
      </div>
    </div>
      )}
  </PlacesAutocomplete>
  </div>
            {/* <input placeholder="Enter a location" onChange={(e) => {setLocation(e.target.value)}}></input> */}
            <br></br>
            <strong>Select a date:</strong>
            <br></br>
            <DatePicker 
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            minDate={new Date()}
            isClearable
            />
            <br/>
            <strong>Select a time:</strong>
            <br></br>
            <TimePicker
            className= 'time'
            onChange={onChange}
            // value={value}
            />
            <br/>
           
          <br/>
          <br/>
            <button 
                type="submit" 
                name="submit" 
                value="Post new event" 
                className='glow-on-hover'
                // class="btn btn-primary mr-1"
            >Post new event</button>
          </form>
        </div>
        )
  




}




export default EventsForm