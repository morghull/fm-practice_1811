import React, { Component } from 'react';

class Autoclicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerDelay: 1000,
    };
    this.intervalId = null;
  }
  render() {
    const { timerDelay } = this.state;
    return (
      <div>
        <button></button>
        <input
          type="number"
          value={step}
          name="step"
          onChange={this.onStepChangeHandler}
        />
      </div>
    );
  }
}

export default Autoclicker;
