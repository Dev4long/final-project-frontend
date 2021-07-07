import './App.css';
import React from 'react';
// import { AiOutlineConsoleSql } from 'react-icons/ai';


class CartItemCard extends React.Component {



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
      </div>
    )
  }
}

export default CartItemCard;
