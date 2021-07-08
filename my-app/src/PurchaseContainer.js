import './App.css';
import React from 'react';
import PurchaseCard from './PurchaseCard'

class PurchaseContainer extends React.Component {

 
   
    
    
  render() {

    // let Purchases = this.props.purchases.map(purchase => purchase.user_id === this.props.userInfo.id)
    // console.log(Purchases)


    return (
      <div className= 'purchases'>
      {this.props.purchases.map(purchase => { return <PurchaseCard purchase={purchase} key={purchase} userInfo={this.props.userInfo} items={this.props.items}/> })}
      </div>
    )
  }
}

export default PurchaseContainer;
