import React, { Component } from 'react';
import styles from './Core.module.css';
import config from '../config';
const {
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
  render() {
    const { step } = this.props;
    const { count, isAdd: isAdd } = this.state;
    return (
      <div className={styles.wrapper}>
        <span className={styles.counter}>{count}</span>
        <div className={styles.step}>
          Step size:<span>{step}</span>
        </div>
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
      </div>
    );
  }
}
export default Core;
