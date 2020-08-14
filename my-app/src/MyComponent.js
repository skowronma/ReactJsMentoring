import React from 'react';

export default class MyComponent extends React.Component{

  render(){
    return  (<p className="componenttext">
        {this.props.displaytext}
    </p>)
  }
}
