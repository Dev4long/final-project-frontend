import './App.css';
import React from 'react';
import CartItemCard from './CartItemCard'

class Cart extends React.Component {

  render() {

    

    return (
      <div>
        {this.props.cart.map(item => { return <CartItemCard item={item} key={item.id} deleteItem={this.props.deleteItem} userInfo={this.props.userInfo}/> })}
      </div>
    )
  }
}

export default Cart;
