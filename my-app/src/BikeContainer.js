import './App.css';
import React from 'react';
import BikeCard from './BikeCard'

class BikeContainer extends React.Component {


   
    
    
  render() {

   


    return (
      <div className= 'bikes'>
       {this.props.bikes.map(bike => { return <BikeCard bike={bike} key={bike.id} addItem={this.props.addItem} cart={this.props.cart} userInfo={this.props.userInfo}/>  })}
      </div>
    )
  }
}

export default BikeContainer;
