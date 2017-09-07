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
      <form className="col-sm-4">
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Add a High Water % Mark to return warnings</ControlLabel>
          <FormControl
            type="text"
            value={this.props.highmark}
            placeholder="Enter text"
            onChange={this.props.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>This should be a number</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default Highmark;