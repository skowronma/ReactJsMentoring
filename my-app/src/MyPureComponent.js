import React from 'react';

export default class MyPureComponent extends React.PureComponent{

  render(){
    return  (<p className="purecomptext">
        {this.props.displaytext}
    </p>)
  }
}
