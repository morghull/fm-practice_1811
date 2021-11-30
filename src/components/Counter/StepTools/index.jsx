import React from 'react';
import styles from './StepTools.module.css';
import config from '../config';
const { minStepValue, maxStepValue, labelStepText } = config;

const StepTools = (props) => {
  const { step, setStep } = props;
  const onStepChangeHandler = ({ target: { value } }) => {
    if (value < minStepValue || value > maxStepValue) return;
    setStep(value);
  };
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
        onChange={onStepChangeHandler}
      />
      <div className={styles.step}>
        Step size:<span>{step}</span>
      </div>
    </div>
  );
};

export default StepTools;
