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
    this.props.changeTs(this.inputEl.value);
  }

  render() {
    let highmarkElem;
    let options = this.props.tablespaces.map((ts, index) => {
      return <option key={index} value={ts.tablespace}>{ts.tablespace}</option>
    });

    if(this.props.current.length > 0) {
      highmarkElem = <Highmark highmark={this.state.highmark} handleChange={this.handleChange}></Highmark>;
    }

    return (
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Choose: </ControlLabel>
          <FormControl onChange={this.handleChange.bind(this)} inputRef={ el => this.inputEl=el } componentClass="select" placeholder="select">
            <option value="none">select</option>
            {options}
          </FormControl>
        </FormGroup>
        {highmarkElem}
      </form>
    );
  }
}

export default CurrentTablespace;