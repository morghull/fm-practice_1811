import React, { Component } from 'react';

class HeapTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isForward: true,
    };
    this.buttonText = new Map().set(true, 'Add').set(false, 'Sub');
  }
  changeDirection = () => {
    const { isForward } = this.state;
    this.setState({
      isForward: !isForward,
    });
  };
  makeHeap = () => {
    const { isForward } = this.state;
    const { step, count, setCount } = this.props;
    const delta = (isForward ? 1 : -1) * step;
    console.log(delta)
    setCount(count + delta);
  };
  render() {
    const { isForward } = this.state;
    return (
      <div>
        <button onClick={this.makeHeap}>
          {this.buttonText.get(isForward)}
        </button>
        <button onClick={this.changeDirection}>Change</button>
      </div>
    );
  }
}

export default HeapTools;
