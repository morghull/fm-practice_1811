import React, { Component } from 'react';
import styles from './AutoclickTools.module.css';

class AutoclickTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerDelay: 1000,
    };
    this.intervalId = null;
  }
  onDelayChangeHandler = (event) => {
    this.setState({
      timerDelay: Number(event.target.value),
    });
  };
  render() {
    const { timerDelay } = this.state;
    return (
      <div className={styles.wrapper}>
        <button className={styles.btn}>Start</button>
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
