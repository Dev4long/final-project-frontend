import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import NavBar from './Navbar'
import Home from './Home'
import BikeContainer from './BikeContainer'
import SkatesContainer from './SkatesContainer'
import Cart from './Cart'




class App extends React.Component {

 
  state = {
    userInfo: [],
    // items: [],
    bikes: [],
    skates: [],
    skateBoards: [],
    cart: [],
    
  }
 
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/items', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(items => this.setState({
        // items: items
        bikes: items.filter(item => item.kind === "bike"),
        skates: items.filter(item => item.kind === "skates"),
        skateBoards: items.filter(item => item.kind === "skateboard")
      })
      )
      fetch('http://localhost:3000/api/v1/carts', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(res => res.json())
      .then(cart => this.setState({
        cart: cart
      })
      )
  }

  



  logOut = () => {
    localStorage.clear()
    this.setState({
      userInfo: [],
    })
  }   



  signup = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target[0].value,
        password: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(console.log)
  }


  login = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target[0].value,
        password: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(userInfo => {
        localStorage.token = userInfo.token
        if (userInfo.token) {
          this.setState({
          userInfo: userInfo.user,
          })
          console.log(userInfo.user)
        }
      })
  }
  // cart: userInfo.user.carts


  // LocalStorage.token? button oclick logout = const localstorage.clear
  // userInfo.token try to use this for if user loggin to conditionally render the logout button
  

  deleteItem = (itemObj) => {
    
    let deletedCartArr = this.state.cart.filter(item => item.item_id !== itemObj.id)
    
    fetch(`http://localhost:3000/api/v1/carts/${itemObj.id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          cart: deletedCartArr
        })

      })
  }

  addItem = (itemObj) => {
    let newCartArray = [...this.state.cart, itemObj]
    this.setState({ cart: newCartArray })
  
  }


  

  render() {

   
  //  console.log(this.state.cart.filter(cart => cart.user_id === this.state.userInfo.id))

    return (
      <div>
        <Router>
        <NavBar />
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path = '/login' >
              <Login login= {this.login}/>
              <Signup signup={this.signup} />
              <button className={"button"}onClick={this.logOut}>Logout</button>
              {/* {this.state.userInfo.id >= 1 ? <button className={"button"}onClick={this.logOut}>Logout</button> : null} */}
            </Route>
            <Route path = '/bikes' >
              <BikeContainer bikes={this.state.bikes} addItem={this.addItem} cart={this.state.cart} userInfo={this.state.userInfo}/>
            </Route>
            <Route path = '/skates' >
              <SkatesContainer skates={this.state.skates}/>
            </Route>
            <Route path = '/cart' >
             <Cart cart={this.state.cart} userInfo={this.state.userInfo} deleteItem={this.deleteItem}/>
            </Route>
            {/* <Route path = '/skateboards' >
             <BoardContainer boards={this.state.skateBoards}/>
            </Route> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
