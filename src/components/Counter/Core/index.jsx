import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Core.module.css';
import config from '../config';
import AutoclickTools from '../AutoclickTools';
const {
  defaultStepSize,
  defaultIsAdd,
  defaultStartValue,
  buttonAddText,
  buttonSubText,
  buttonChangeText,
} = config;

class Core extends Component {
  constructor(props) {
    super(props);
    this.state = { count: defaultStartValue, isAdd: defaultIsAdd };
  }
  changeDirection = () => {
    this.setState((state, props) => ({
      isAdd: !state.isAdd,
    }));
  };
  makeStep = () => {
    this.setState((state, props) => {
      const { count, isAdd } = state;
      const { step } = this.props;

      const delta = (isAdd ? 1 : -1) * step;
      return { count: count + delta };
    });
  };
  shouldComponentUpdate(nextPtops, nextState) {
    return nextPtops.step === this.props.step;
  }
  render() {
    const { count, isAdd } = this.state;

    return (
      <div className={styles.wrapper}>
        <span className={styles.counter}>{count}</span>
        <div>
          <button className={styles.btn} onClick={this.makeStep}>
            {isAdd ? buttonAddText : buttonSubText}
          </button>
          <button
            className={styles.btn}
            onClick={this.changeDirection}
          >
            {buttonChangeText}
          </button>
        </div>
        <AutoclickTools makeStep={this.makeStep} />
      </div>
    );
  }
}

Core.defaultProps = {
  step: defaultStepSize,
};

Core.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Core;
