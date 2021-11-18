import React, { Component } from 'react';
import HeapTools from '../HeapTools';

class Core extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  setCount = (delta) => {
    this.setState((state, props) => ({ count: state.count + delta }));
  };
  render() {
    const { step } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>{count}</h2>
        <div>
          <span>{step}</span>
        </div>
        <HeapTools step={step} setCount={this.setCount} />
      </div>
    );
  }
}
export default Core;
