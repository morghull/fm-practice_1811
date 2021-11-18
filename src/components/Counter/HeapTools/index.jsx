import React, { Component } from 'react';

class HeapTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForward: true,
    };
  }
  changeDirection = () => {
    const { isForward } = this.state;
    this.setState({
      isForward: !isForward,
    });
  };
  makeHeap = () => {
    const { isForward } = this.state;
    const { step, setCount } = this.props;

    const delta = (isForward ? 1 : -1) * step;
    setCount(delta);
  };
  render() {
    const { isForward } = this.state;
    return (
      <div>
        <button onClick={this.makeHeap}>
          {isForward ? 'Add' : 'Sub'}
        </button>
        <button onClick={this.changeDirection}>Change</button>
      </div>
    );
  }
}

export default HeapTools;
