import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  render() {
    console.log('This is Simple Component');

    return (
      <div>
        <h2>Simple Counter Component</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggle}>Set toggle</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
