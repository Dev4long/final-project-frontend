import './App.css';
import React from 'react';

class EventCard extends React.Component {

  render() {



    return (
      <div className = 'eventCard'>
       <h3>Ride description:<br></br>{this.props.event.description}</h3>
       <img alt="events" className= "eventImg" src={this.props.event.image}/>
       <h3>Location:<br></br>{this.props.event.location}</h3>
       <h3>Date:<br></br>{this.props.event.date.slice(0, 10)}</h3>
       <h3>Time:<br></br>{this.props.event.time}</h3>
       {this.props.userInfo.id === this.props.event.user_id ? <button className ="glow-on-hover" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete your event</button> :null}
      </div>
    )
  }
}

export default EventCard;
