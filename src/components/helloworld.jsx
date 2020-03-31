import React from 'react';
import './helloworld.css';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    alert("")
  }

  render() {
    return (
      <div className="container">
        <h1>WEBPACK BASE</h1>
        <button className="clickButton" onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
