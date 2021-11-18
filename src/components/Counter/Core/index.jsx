import React, { Component } from 'react';

class Core extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isAdd: true };
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
      <div>
        <h2>{count}</h2>
        <div>
          <span>{step}</span>
        </div>
        <div>
          <button onClick={this.makeStep}>
            {isAdd ? 'Add' : 'Sub'}
          </button>
          <button onClick={this.changeDirection}>Change</button>
        </div>
      </div>
    );
  }
}
export default Core;
