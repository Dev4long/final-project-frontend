import './App.css';
import React from 'react';
import BoardCard from './BoardCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'

class BoardContainer extends React.Component {


   
    
    
  render() {

   


    return (
      <div className= 'bikes'>
         <Container>
          <Row lg={4}>
          {this.props.boards.map(board => { return <BoardCard board={board} key={board.id} addItem={this.props.addItem} cart={this.props.cart} userInfo={this.props.userInfo}/>  })}
          </Row>
          </Container>
        </div>
    )
  }
}

export default BoardContainer;
