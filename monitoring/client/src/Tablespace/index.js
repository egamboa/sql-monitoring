import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'whatwg-fetch';

import { SERVER_URL } from '../config';
import Highmark from '../Common/Highmark';
import Chart from './Chart';

class Sga extends Component {
  constructor() {
    super();
    this.intervalTime = 10000;
    this.state = {
      monitoring: [],
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

  handleChange = (e) => {
    this.setState({ highmark: e.target.value });
  }

  render() {
    return <section>
      <Row>
        <Col xs={4}>
          <h1><strong>Tablespace Disk Monitoring</strong></h1>
          <br />
          <Highmark highmark={this.state.highmark} handleChange={this.handleChange}></Highmark>
        </Col>
      </Row>
      <Row>
        <Chart monitoring={this.state.monitoring} highmark={this.state.highmark} />
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Sga;
