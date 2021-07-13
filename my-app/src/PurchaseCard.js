import './App.css';
import React from 'react';

class PurchaseCard extends React.Component {

  render() {

    let Purchases = this.props.items.filter(item => item.id === this.props.purchase.item_id)
    
    return (
      <div className= "purchasedItem">
          
       <h3>{Purchases.map(purchase => purchase.name)}</h3>
       <img alt="bike" className = 'purchasedItemImg' src={Purchases.map(purchase => purchase.image)}/>
       <h3>{Purchases.map(purchase => purchase.price)}$</h3>
       <h3>{Purchases.map(purchase => purchase.rating)}⭐</h3>
      
      </div>
    )
  }
}

export default PurchaseCard ;
