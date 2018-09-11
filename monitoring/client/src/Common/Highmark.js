import React, { Component } from 'react';
import { FormControl, ControlLabel, FormGroup, HelpBlock } from 'react-bootstrap';

class Highmark extends Component {

  getValidationState = () => {
    const value = this.props.highmark;
    if (value.length === 0) return 'warning';
    if (Number.isInteger(Number(value))) return 'success';
    else return 'error';
  }

  render() {
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={this.getValidationState()}>
        <ControlLabel>High Water Mark %</ControlLabel>
        <FormControl
          type="text"
          value={this.props.highmark}
          placeholder="Enter text"
          onChange={this.props.handleChange} />
        <FormControl.Feedback />
        <HelpBlock>Only numbers</HelpBlock>
      </FormGroup>
    );
  }
}

export default Highmark;