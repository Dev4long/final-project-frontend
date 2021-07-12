import './App.css';
import React from 'react';

class EventCard extends React.Component {

  render() {



    return (
      <div>
       <h3>Ride description:{this.props.event.description}</h3>
       <img alt="events" className= "eventImg" src={this.props.event.image}/>
       <h3>Location:{this.props.event.location}</h3>
       <h3>Date:{this.props.event.date.slice(0, 10)}</h3>
       <h3>Time:{this.props.event.time}</h3>
       {/* {this.props.userInfo.id === this.props.event.user_id ? <button onClick={() => this.props.addItem(this.props.skate)}>Edit your event</button> :null} */}
      </div>
    )
  }
}

export default EventCard;
