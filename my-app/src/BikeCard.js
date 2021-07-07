import './App.css';
import React from 'react';


class BikeCard extends React.Component {


  //   handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('http://localhost:3000/api/v1/carts', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${localStorage.token}`
  //     },
  //     body: JSON.stringify({
  //       user_id: this.props.userInfo.id,
  //       item_id: this.props.bike.id,
        
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(itemObj => {
  //       this.props.addItem(itemObj)
  //       alert("Bike placed in your cart")
  //     })
  // }

  render() {


    return (
      <div className= 'bikes1'>
       <h3>{this.props.bike.name}</h3>
       <img alt="bike" className= "bikeImg"src={this.props.bike.image}/>
       <h3>{this.props.bike.price}$</h3>
       <h3>{this.props.bike.rating}⭐</h3>
       {this.props.userInfo.id >= 1 ? <button onClick={() => this.props.addItem(this.props.bike)}>Add to cart</button> :null}
      </div>
    )
  }
}

export default BikeCard;
