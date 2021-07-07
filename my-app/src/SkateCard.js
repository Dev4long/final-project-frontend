import './App.css';
import React from 'react';

class SkateCard extends React.Component {

  render() {



    return (
      <div>
       <h3>{this.props.skate.name}</h3>
       <img alt="skates" src={this.props.skate.image}/>
       <h3>{this.props.skate.price}$</h3>
       <h3>{this.props.skate.rating}⭐</h3>
       {this.props.userInfo.id >= 1 ? <button onClick={() => this.props.addItem(this.props.skate)}>Add to cart</button> :null}
      </div>
    )
  }
}

export default SkateCard;
