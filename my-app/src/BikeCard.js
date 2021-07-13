import './App.css';
import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class BikeCard extends React.Component {


  render() {


    return (
      <Col>
      <Card className= 'bikes1'>
       <Card.Title>{this.props.bike.name}</Card.Title>
       <Card.Img alt="bike" src={this.props.bike.image} fluid/>
       <Card.Body>
       <Card.Text>{this.props.bike.price}$</Card.Text>
       <Card.Text>{this.props.bike.rating}⭐</Card.Text>
       {this.props.userInfo.id >= 1 ? <button className = "glow-on-hover" onClick={() => this.props.addItem(this.props.bike)}>Add to cart</button> :null}
       </Card.Body>
      </Card>
      </Col>
    )
  }
}

export default BikeCard;
