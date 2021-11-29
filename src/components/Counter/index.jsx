import React, { Component } from 'react';
import Core from './Core';
import StepTools from './StepTools';
import styles from './Counter.module.css';
import config from './config';
import AutoclickTools from './AutoclickTools';
const { defaultStepSize } = config;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { step: defaultStepSize };
  }
  setStep = (newStep) => {
    this.setState({ step: Number(newStep) });
  };
  render() {
    const { step } = this.state;
    return (
      <section className={styles.section}>
        <Core step={step} />
        <StepTools step={step} setStep={this.setStep} />
        <AutoclickTools />
      </section>
    );
  }
}

export default Counter;
