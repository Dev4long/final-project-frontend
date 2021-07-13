import './App.css';
import React from 'react';
import BikeCard from './BikeCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'

class BikeContainer extends React.Component {


   
    
    
  render() {

   


    return (
      <div className= 'bikes1' style={{display: "flex", flexDisplay: ""}}>
        <Container>
        <Row lg={4}>
       {this.props.bikes.map(bike => { return <BikeCard bike={bike} key={bike.id} addItem={this.props.addItem} cart={this.props.cart} userInfo={this.props.userInfo}/>  })}
       </Row>
       </Container>
      </div>
    )
  }
}

export default BikeContainer;
