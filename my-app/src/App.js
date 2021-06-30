import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import NavBar from './Navbar'
import Home from './Home'


class App extends React.Component {

  state = {
    userInfo: [],
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
            userInfo: userInfo.user})
          console.log(userInfo.user)
        }
      })
  }


  render() {
    return (
      <div>
        <Router>
        <NavBar />
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path = '/login' >
              <Login login= {this.login}/>
              <Signup signup={this.signup} />
              {this.state.userInfo.id >= 1 ? <button className={"button"}onClick={this.logOut}>Logout</button> : null}
            </Route>
          </Switch>
        </Router>
        
        {/* <Login login={this.login} />
        <Signup signup={this.signup} />
        <button className={"button"}onClick={this.logOut}>Logout</button> */}
      </div>
    )
  }
}

export default App;
