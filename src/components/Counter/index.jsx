import React, { Component } from 'react';
import Core from './Core';
import StepTool from './StepTools';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1};
  }
  setStep = (newStep) => {
    this.setState({ step: newStep });
  };
  render() {
    const {step } = this.state;
    return (
      <section>
        <Core step={step} />
        <StepTool step={step} setStep={this.setStep} />
      </section>
    );
  }
}

export default Counter;
