import './App.css';
import React from 'react';
// import { AiOutlineConsoleSql } from 'react-icons/ai';


class CartItemCard extends React.Component {


  handleSubmit = (e) => {
    
    // let items_id = this.props.cart.map(cart => cart.id)
    // console.log(items_id)
    // console.log(this.props.cart)

    // e.preventDefault()
    fetch('http://localhost:3000/api/v1/purchases', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user_id: this.props.userInfo.id,
        item_id: this.props.item.id
        
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
 
    // let item1 = (this.props.userInfo.iems.filter(items => items.id) === this.props.item.items_id)
    // console.log(item1)
    return (
      <div>
       <h3>{this.props.item.name}</h3>
       <img alt="bike" src={this.props.item.image}/>
       <h3>{this.props.item.price}$</h3>
       <h3>{this.props.item.rating}⭐</h3>
       <button onClick={() => this.props.deleteItem(this.props.item.id)}>Remove from cart</button>
       <button onClick={() => this.handleSubmit(this.props.cart)}>purchasae</button>
      </div>
    )
  }
}

export default CartItemCard;
