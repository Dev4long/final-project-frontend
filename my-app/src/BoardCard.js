import './App.css';
import React from 'react';

class BoardCard extends React.Component {

  render() {



    return (
      <div>
       <h3>{this.props.board.name}</h3>
       <img alt="boards" className= "boardImg" src={this.props.board.image}/>
       <h3>{this.props.board.price}$</h3>
       <h3>{this.props.board.rating}⭐</h3>
       {this.props.userInfo.id >= 1 ? <button onClick={() => this.props.addItem(this.props.board)}>Add to cart</button> :null}
      </div>
    )
  }
}

export default BoardCard;
