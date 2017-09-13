import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'whatwg-fetch';

import { SERVER_URL } from '../config';
import Chart from './Chart';
import Highmark from '../Common/Highmark';
import Queries from './Queries';

class Sga extends Component {
  constructor() {
    super();
    this.intervalTime = 30000;
    this.state = {
      monitoring: [],
      highmark: '80',
      queries: []
    }
    this.intervalInstance = null;
  }

  componentDidMount() {
    this.intervalInstance = setInterval(() => {
      fetch(SERVER_URL + 'monitoring?type=sga')
        .then(r => r.json())
        .then(json => this.setMonitoringData(json))
        .catch(error => console.error('Error connecting to server: ' + error));
    }, this.intervalTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalInstance);
  }

  toMB = (bytes) => {
    return bytes / 1024 / 1024;
  }

  setMonitoringData = (json) => {
    this.setState({ monitoring: json });
    this.checkHighmark();
  }

  checkHighmark = () => {
    let max = this.toMB(this.state.monitoring[0]['BYTES']);
    let current = this.toMB(this.state.monitoring[1]['current']);
    let highmark = max - (max * (1 - (this.state.highmark / 100)));
    if (current > highmark) {
      fetch(SERVER_URL + 'monitoring?type=sqls')
        .then(r => r.json())
        .then(json => this.setState({ queries: json }))
        .catch(error => console.error('Error connecting to server: ' + error));
    } else {
      this.setState({ queries: [] })
    }
  }

  handleChange = (e) => {
    this.setState({ highmark: e.target.value });
  }

  render() {
    let queries = this.state.queries.length > 0 ? <Queries queries={this.state.queries} /> : '';
    return <section>
      <Row className="show-grid">
        <Col xs={4}>
          <h1><strong>SGA Memory Monitoring</strong></h1>
          <br />
          <Highmark highmark={this.state.highmark} handleChange={this.handleChange}></Highmark>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Chart monitoring={this.state.monitoring} highmark={this.state.highmark} />
        </Col>
      </Row>
      {queries}
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Sga;
