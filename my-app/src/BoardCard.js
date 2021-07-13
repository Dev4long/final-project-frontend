import './App.css';
import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class BoardCard extends React.Component {

  render() {



    return (
      <Col>
      <Card>
       <Card.Title>{this.props.board.name}</Card.Title>
       <Card.Img alt="boards" src={this.props.board.image}/>
       <Card.Body>
       <Card.Text>{this.props.board.price}$</Card.Text>
       <Card.Text>{this.props.board.rating}⭐</Card.Text>
       {this.props.userInfo.id >= 1 ? <button className = "glow-on-hover" onClick={() => this.props.addItem(this.props.board)}>Add to cart</button> :null}
       </Card.Body>
      </Card>
      </Col>
    )
  }
}

export default BoardCard;
