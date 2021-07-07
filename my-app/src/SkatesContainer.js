import './App.css';
import React from 'react';
import SkateCard from './SkateCard'

class SkatesContainer extends React.Component {


   
    
    
  render() {

    return (
      <div>
       {this.props.skates.map(skate => { return <SkateCard skate={skate} key={skate.id} addItem={this.props.addItem} cart={this.props.cart} userInfo={this.props.userInfo}/>})}
      </div>
    )
  }
}

export default SkatesContainer;
