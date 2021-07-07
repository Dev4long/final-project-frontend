import './App.css';
import React from 'react';

class PurchaseCard extends React.Component {

  render() {

    let Purchases = this.props.purchase.user_id === this.props.userInfo.id
    console.log(Purchases)
console.log(this.props.purchase)

    return (
      <div>
          
       <h3>{Purchases ? this.props.purchase.item.name :null}</h3>
       <img alt="bike" className= "bikeImg"src={Purchases ? this.props.purchase.item.image:null}/>
       <h3>{Purchases ? this.props.purchase.item.price:null}$</h3>
       <h3>{Purchases ? this.props.purchase.item.rating:null}⭐</h3>
          
      </div>
    )
  }
}

export default PurchaseCard ;
