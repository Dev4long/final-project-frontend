import './App.css';
import React from 'react';

class BikeCard extends React.Component {

  render() {



    return (
      <div>
       <h3>{this.props.bike.name}</h3>
       <img alt="rooms" src={this.props.bike.image}/>
       <h3>{this.props.bike.price}$</h3>
       <h3>{this.props.bike.rating}⭐</h3>
       <button>Add to cart</button>
      </div>
    )
  }
}

export default BikeCard;
