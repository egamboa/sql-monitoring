import React, { Component } from 'react';
import Sga from '../Sga';
import Tablespace from '../Tablespace';
import Logs from '../Logs';

class Results extends Component {

  render() {
    return <div>
      <Sga></Sga>
      <Tablespace></Tablespace>
      <Logs></Logs>
    </div>
  }
}

export default Results;
