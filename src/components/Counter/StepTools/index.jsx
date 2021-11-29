import React, { Component } from 'react';
import styles from './StepTool.module.css';
import config from '../config';
const { minStepValue, maxStepValue } = config;

class StepTool extends Component {
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
        <input
          type="number"
          value={step}
          name="step"
          className={styles.input}
          onChange={this.onStepChangeHandler}
        />
      </div>
    );
  }
}

export default StepTool;
