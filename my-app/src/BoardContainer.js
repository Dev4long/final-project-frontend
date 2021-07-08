import './App.css';
import React from 'react';
import BoardCard from './BoardCard'

class BoardContainer extends React.Component {


   
    
    
  render() {

   


    return (
      <div className= 'bikes'>
       {this.props.boards.map(board => { return <BoardCard board={board} key={board.id} addItem={this.props.addItem} cart={this.props.cart} userInfo={this.props.userInfo}/>  })}
      </div>
    )
  }
}

export default BoardContainer;
