import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import MyPureComponent from './MyPureComponent'
import User from './User'

var element = React.createElement('h1',{className:"header_text"}, 'Hello World')
function HelloFunctionalComponent() {
  return <p>Hello from functional component</p>;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
      </header>
      <User />
      <MyComponent displaytext="Hello from component"/>
      <MyPureComponent displaytext="Hello from pure component"/>
      {HelloFunctionalComponent()}
    </div>
  );
}

export default App;
