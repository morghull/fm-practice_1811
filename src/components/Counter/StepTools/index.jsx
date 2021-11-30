import React, { Component } from 'react';
import styles from './StepTools.module.css';
import config from '../config';
const { minStepValue, maxStepValue, labelStepText } = config;

class StepTools extends Component {
  constructor(props) {
    super(props);
  }
  onStepChangeHandler = ({ target: { value } }) => {
    if (value < minStepValue || value > maxStepValue) return;
    const { setStep } = this.props;
    setStep(value);
  };
  render() {
    const { step } = this.props;
    return (
      <div className={styles.wrapper}>
        <span className={styles.label}>{labelStepText}</span>
        <input
          type="range"
          value={step}
          name="step"
          min={minStepValue}
          max={maxStepValue}
          className={styles.input}
          onChange={this.onStepChangeHandler}
        />
        <div className={styles.step}>
          Step size:<span>{step}</span>
        </div>
      </div>
    );
  }
}

export default StepTools;
