import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import 'whatwg-fetch';

import { SERVER_URL } from '../config';
import Chart from './Chart';
import CurrentTablespace from './CurrentTablespace';

class Tablespace extends Component {
  constructor() {
    super();
    this.intervalTime = 3000;
    this.state = {
      highmark: '80'
    }
    this.intervalInstance = null;
  }

  componentDidMount() {
    this.intervalInstance = setInterval(() => {
      fetch(SERVER_URL + 'monitoring?type=ts')
        .then(r => r.json())
        .then(json => this.setState({ monitoring: json }))
        .catch(error => console.error('Error connecting to server: ' + error));
    }, this.intervalTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalInstance);
  }

  render() {
    return <section>
      <Row>
        <Chart monitoring={this.state.monitoring} highmark={this.state.highmark} />
      </Row>
      <Row>
        <CurrentTablespace monitoring={this.state.monitoring} />
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Tablespace;
