import React from 'react';
import PropTypes from 'prop-types';
import styles from './StepTools.module.css';
import config from '../config';
const {
  defaultStepSize,
  minStepValue,
  maxStepValue,
  labelStepText,
  labelCurrentStepSizeText,
} = config;

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
        {labelCurrentStepSizeText}
        <span>{step}</span>
      </div>
    </div>
  );
};

StepTools.defaultProps = {
  step: defaultStepSize,
};

StepTools.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default StepTools;
