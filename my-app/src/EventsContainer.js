import './App.css';
import React from 'react';
import EventCard from './EventCard'


class EventsContainer extends React.Component {


   
    
    
  render() {

   


    return (
      <div className= 'events'>
       <button>Post event</button>
       {this.props.events.map(event => { return <EventCard event={event} key={event.id} userInfo={this.props.userInfo} /> })}
      </div>
    )
  }
}

export default EventsContainer;
