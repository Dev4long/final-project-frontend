import './App.css';
import React, { Component, useState } from "react";



function ProfileForm(props) {
let [name,setName] = useState("")
let [pic,setPic] = useState("")
let [age,setAge] = useState("")
let [email,setEmail] = useState("")
let [bio,setBio] = useState("")


     let handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/users/${props.profile.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${localStorage.token}`
          },
          body: JSON.stringify({
            name: name,
            email: email,
            pic: pic,
            bio: bio,
            age: age,
          })
        })
          .then(res => res.json())
          .then(newProfile => {
            props.updateProfile(newProfile)
            console.log(newProfile)
            setName("")
            setPic("")
            setAge("")
            setEmail("")
            setBio("")
            alert("profile updated")
          })
    }



  
    
    return (
      <div >
          <br></br>
          <br></br>
      <form onSubmit={handleSubmit}>
      <strong>Name</strong>
      <br></br>
      <input placeholder="Enter name here" onChange={(e) => {setName(e.target.value)}}></input>
      <br></br>
      <strong>Profile pic</strong>
      <br></br>
      <input placeholder="Enter pic url" onChange={(e) => {setPic(e.target.value)}}></input>
      <br></br>
      <strong>Age</strong>
      <br></br>
      <input placeholder="Enter age here" onChange={(e) => {setAge(e.target.value)}}></input>
      <br></br>
      <strong>Email</strong>
      <br></br>
      <input placeholder="Enter your email here" onChange={(e) => {setEmail(e.target.value)}}></input>
      <br></br>
      <strong>Bio</strong>
      <br></br>
      <textarea placeholder="Enter your description" onChange={(e) => {setBio(e.target.value)}}></textarea>
      <br></br>
      <input 
                type="submit" 
                name="submit" 
                value="Save changes" 
                className="submit"
                // class="profileButton"
            />
      </form>
      </div>
    )
  
}

export default ProfileForm;

