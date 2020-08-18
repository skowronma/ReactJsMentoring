import React from 'react';

export default class User extends React.Component{
state = {
  loggedIn: false
}
logIn=() => this.setState({loggedIn :true})
logOut=() => this.setState({loggedIn :false})

render(){
  return  (
    <div>
      <button onClick={this.logIn}>Log Out</button>
  <div>The user is {this.state.loggedIn ? "logged in": "not logged in"}</div>
  { this.state.loggedIn ?
    <button onClick={this.logIn}>Log In</button>
    : <button onClick={this.logOut}>Log Out</button> }

  </div>

    )
}
}
