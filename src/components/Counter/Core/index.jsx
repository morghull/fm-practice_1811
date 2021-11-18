import React, { Component } from 'react';

class Core extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { count } = this.props;
    return (
      <>
        <h2>{count}</h2>
      </>
    );
  }
}
export default Core;
