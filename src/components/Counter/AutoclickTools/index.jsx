import React, { Component } from 'react';
import styles from './AutoclickTools.module.css';
import config from '../config';
const { labelAutoclickerText, buttonStartText, buttonStopText } =
  config;

class AutoclickTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerDelay: 1000,
      isOn: false,
    };
    this.timeoutId = null;
  }
  onDelayChangeHandler = (event) => {
    this.setState({
      timerDelay: Number(event.target.value),
    });
  };
  tick = () => {
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.props.makeStep();
    }, this.state.timerDelay);
  };
  start = () => {
    if (!this.timeoutId) {
      this.setState({ isOn: true });
      this.tick();
    }
  };
  stop = () => {
    this.setState({ isOn: false });
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  };
  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {
    if (this.state.isOn) this.tick();
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }
  render() {
    const { timerDelay, isOn } = this.state;
    return (
      <div className={styles.wrapper}>
        <span className={styles.label}>{labelAutoclickerText}</span>
        <button
          className={styles.btn}
          onClick={isOn ? this.stop : this.start}
        >
          {isOn ? buttonStopText : buttonStartText}
        </button>
        <input
          className={styles.input}
          type="number"
          value={timerDelay}
          name="delay"
          onChange={this.onDelayChangeHandler}
        />
      </div>
    );
  }
}

export default AutoclickTools;
