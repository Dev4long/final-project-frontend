import './App.css';
import React from 'react';
import SkateCard from './SkateCard'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'


class SkatesContainer extends React.Component {


   
    
    
  render() {

    return (
      <div>
        <Container>
          <Row lg={4}>
       {this.props.skates.map(skate => { return <SkateCard skate={skate} key={skate.id} addItem={this.props.addItem} cart={this.props.cart} userInfo={this.props.userInfo}/>})}
          </Row>
          </Container>
      </div>
    )
  }
}

export default SkatesContainer;
