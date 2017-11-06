import React, { Component } from 'react';
import { FormControl, ControlLabel, FormGroup } from 'react-bootstrap';
import Highmark from '../Common/Highmark'

class CurrentTablespace extends Component {
  constructor() {
    super();
    this.state = {
      highmark: '80'
    }
  }

  handleChange = (e) => {
    this.setState({ highmark: e.target.value });
  }

  render() {
    let options = this.props.tablespaces.map((ts, index) => {
      return <option key={index} value="select">{ts.tablespace}</option>
    })
    return (
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Choose: </ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            {options}
          </FormControl>
        </FormGroup>
        <Highmark highmark={this.state.highmark} handleChange={this.handleChange}></Highmark>
      </form>
    );
  }
}

export default CurrentTablespace;