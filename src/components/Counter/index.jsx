import React, { Component } from 'react';
import Core from './Core';
import StepTool from './StepTools';
import styles from './Counter.module.css';
import config from './config';
const { defaultStepSize } = config;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { step: defaultStepSize };
  }
  setStep = (newStep) => {
    this.setState({ step: newStep });
  };
  render() {
    const { step } = this.state;
    return (
      <section className={styles.section}>
        <Core step={step} />
        <StepTool step={step} setStep={this.setStep} />
      </section>
    );
  }
}

export default Counter;
