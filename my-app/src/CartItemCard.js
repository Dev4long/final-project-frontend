import './App.css';
import React from 'react';



class CartItemCard extends React.Component {


  handleSubmit = (e) => {
    
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
       
      })
  }


  render() {
 

    return (
      <div className="cartItem">
       <h3>{this.props.item.name}</h3>
       <img alt="bike" className= "cartItemImg"src={this.props.item.image}/>
       <h3>{this.props.item.price}$</h3>
       <h3>{this.props.item.rating}⭐</h3>
       <button className = "glow-on-hover" onClick={() => this.props.deleteItem(this.props.item.id)}>Remove from cart</button>
       <button style ={{marginLeft: "1em"}}className = "glow-on-hover" onClick={() => {this.handleSubmit(this.props.cart); this.props.deleteItem(this.props.item.id) }}>Purchasae item</button>
      </div>
    )
  }
}

export default CartItemCard;
