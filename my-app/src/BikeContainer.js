import './App.css';
import React from 'react';
import BikeCard from './BikeCard'

class BikeContainer extends React.Component {


   
    
    
  render() {

   


    return (
      <div>
       {this.props.bikes.map(bike => { return <BikeCard bike={bike} key={bike.id} /> })}
      </div>
    )
  }
}

export default BikeContainer;
