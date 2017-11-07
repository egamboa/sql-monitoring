import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import 'whatwg-fetch';

import { SERVER_URL } from '../config';
import Chart from './Chart';
import CurrentTablespace from './CurrentTablespace';

class Tablespace extends Component {
  constructor() {
    super();
    this.intervalTime = 10000;
    this.state = { current: [] }
    this.intervalInstance = null;
  }

  componentDidMount() {
    this.fetchingTS();
    this.intervalInstance = setInterval(() => {
      this.fetchingTS();
    }, this.intervalTime);
  }

  fetchingTS () {
    fetch(SERVER_URL + 'monitoring?type=ts')
    .then(r => r.json())
    .then(json => this.setState({ monitoring: json }))
    .catch(error => console.error('Error connecting to server: ' + error));
  }

  componentWillUnmount() {
    clearInterval(this.intervalInstance);
  }

  changeTs = (newTablespace) => {  
    fetch(SERVER_URL + 'monitoring?type=getts&ts=' + newTablespace )
      .then(r => r.json())
      .then(json => this.setState({ current: json }))
      .catch(error => console.error('Error connecting to server: ' + error));  
  }

  render() {
    return <section>
      <Row>
        <Chart monitoring={this.state.monitoring} />
      </Row>
      <Row>
        <CurrentTablespace changeTs={this.changeTs} current={this.state.current} monitoring={this.state.monitoring} />
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Tablespace;
