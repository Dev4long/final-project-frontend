import './App.css';
import React from 'react';
import PurchaseCard from './PurchaseCard'

class PurchaseContainer extends React.Component {

 
   
    
    
  render() {

    let Purchases = this.props.purchases.map(purchase => purchase.user_id === this.props.userInfo.id)
    console.log(Purchases)


    return (
      <div className= 'purchases'>
      {Purchases ? this.props.purchases.map(purchase => { return <PurchaseCard purchase={purchase} key={purchase} userInfo={this.props.userInfo}/> }): null}
      </div>
    )
  }
}

export default PurchaseContainer;
