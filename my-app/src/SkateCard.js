import './App.css';
import React from 'react';

class SkateCard extends React.Component {

  render() {



    return (
      <div>
       <h3>{this.props.skate.name}</h3>
       <img alt="rooms" src={this.props.skate.image}/>
       <h3>{this.props.skate.price}$</h3>
       <h3>{this.props.skate.rating}⭐</h3>
       <button>Add to cart</button>
      </div>
    )
  }
}

export default SkateCard;
