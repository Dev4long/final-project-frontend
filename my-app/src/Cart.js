import './App.css';
import React from 'react';
import CartItemCard from './CartItemCard'

class Cart extends React.Component {
  
  handleSubmit = (e) => {
    
    let items_id = this.props.cart.map(cart => cart.id)
    console.log(items_id)
    console.log(this.props.cart)

    // e.preventDefault()
    fetch('http://localhost:3000/api/v1/purchases', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user_id: this.props.userInfo.id,
        item_id: items_id
        
      })
    })
      .then(res => res.json())
      .then(perchObj => {
        this.props.purchaseItem(perchObj)
        console.log(perchObj)
        // this.props.addItem(itemObj)
        // alert("Bike placed in your cart")
      })
  }

  render() {

    
  

    return (
      <div>
        {this.props.cart.map(item => { return <CartItemCard item={item} key={item.id} deleteItem={this.props.deleteItem} userInfo={this.props.userInfo} purchaseItem={this.props.purchaseItem}/> })}
        {/* <button onClick={() => this.handleSubmit(this.props.cart)}>purchasae</button> */}
      </div>
    )
  }
}

export default Cart;
