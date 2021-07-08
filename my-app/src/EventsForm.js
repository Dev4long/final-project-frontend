import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import "react-time-picker/dist/TimePicker.css"





function EventsForm(props) {
    let [description, setDescription] = useState("")
    let [selectedDate, setSelectedDate] = useState("");
    let [time, onChange] = useState('12:00');
    let [image, setImage] = useState("")
    let [location, setLocation] = useState("")
    

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
            location: location,
            time: time,
            date: selectedDate,
            user_id: props.userInfo.id
            

          })
        })
          .then(res => res.json())
          .then(newEvent => {
            props.addEvent(newEvent)
            console.log(newEvent)
            // setDescription("")
            // setSelectedDate("")
            // onChange("")
            // setDurationPrice("")
            alert("Event posted")
          })
    }
  //  console.log(props.mySessions.sessions)
      // console.log(props.trainer)

       

        return (
            <div className="container">
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
            <input placeholder="Enter a location" onChange={(e) => {setLocation(e.target.value)}}></input>
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
            onChange={onChange}
            // value={value}
            />
            <br/>
           
          <br/>
          <br/>
            <input 
                type="submit" 
                name="submit" 
                value="Post new event" 
                className="submit"
                // class="btn btn-primary mr-1"
            />
          </form>
        </div>
        )
  




}




export default EventsForm