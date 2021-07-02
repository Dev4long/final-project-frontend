import './App.css';
import React from 'react';


class CartItemCard extends React.Component {



  render() {
 

    return (
      <div>
       <h3>{this.props.item.item.name}</h3>
       <img alt="bike" src={this.props.item.item.image}/>
       <h3>{this.props.item.item.price}$</h3>
       <h3>{this.props.item.item.rating}⭐</h3>
       <button onClick={this.props.deleteItem(this.props.item.item.id)}>Remove from cart</button>
      </div>
    )
  }
}

export default CartItemCard;
