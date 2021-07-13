import './App.css';
import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class SkateCard extends React.Component {

  render() {



    return (
      <Col>
      <Card>
      
       <Card.Title>{this.props.skate.name}</Card.Title>
       <Card.Img alt="skates" src={this.props.skate.image}/>
       <Card.Body>
       <Card.Text>{this.props.skate.price}$</Card.Text>
       <Card.Text>{this.props.skate.rating}⭐</Card.Text>
       {this.props.userInfo.id >= 1 ? <button className = "glow-on-hover" onClick={() => this.props.addItem(this.props.skate)}>Add to cart</button> :null}
       </Card.Body>
       </Card>
       </Col>
    )
  }
}

export default SkateCard;
