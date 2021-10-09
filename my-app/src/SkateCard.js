import './App.css';
import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class SkateCard extends React.Component {

  render() {



    return (
      <Col>
      <Card style= {{width: '285px' , height: '450px', margin: '1em',opacity: "0.95", marginLeft: '1em'}}>
      
       <Card.Title className="cardTitle">{this.props.skate.name}</Card.Title>
       <Card.Img style= {{width: '200px' , height: '200px'}} alt="skates" src={this.props.skate.image}/>
       <Card.Body>
       <Card.Text className="cardInfo">{this.props.skate.price}$</Card.Text>
       <Card.Text className="cardInfo">{this.props.skate.rating}⭐</Card.Text>
       {this.props.userInfo.id >= 1 ? <button className = "glow-on-hover" onClick={() => this.props.addItem(this.props.skate)}>Add to cart</button> :null}
       </Card.Body>
       </Card>
       </Col>
    )
  }
}

export default SkateCard;
