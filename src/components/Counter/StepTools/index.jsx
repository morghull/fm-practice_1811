import React, { Component } from 'react';

class StepTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStepInputValid: true,
    };
  }
  onStepChangeHandler = ({ target: { value } }) => {
    if (value < 1|| value>1000000) return;
    const { setStep } = this.props;
    setStep(value);
  };
  render() {
    const { step } = this.props;
    return (
      <div>
        <input
          type="number"
          value={step}
          name="step"
          onChange={this.onStepChangeHandler}
        />
        <div>
          <span>{step}</span>
        </div>
      </div>
    );
  }
}

export default StepTool;
