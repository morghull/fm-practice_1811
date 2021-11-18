import React, { Component } from 'react';
import Core from './Core';
import HeapTools from './HeapTools';
import StepTool from './StepTools';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 1, count: 0 };
  }
  setCount = (newCount) => {
    console.log(this);
    this.setState({ count: newCount });
  };
  setStep = (newStep) => {
    this.setState({ step: newStep });
  };
  render() {
    const { count, step } = this.state;
    return (
      <section>
        <Core count={count} />
        <HeapTools
          step={step}
          count={count}
          setCount={this.setCount}
        />
        <StepTool step={step} setStep={this.setStep} />
      </section>
    );
  }
}

export default Counter;
