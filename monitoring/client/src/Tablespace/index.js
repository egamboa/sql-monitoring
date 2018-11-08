import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import 'whatwg-fetch';

import { SERVER_URL } from '../config';
import Chart from './Chart';

class Tablespace extends Component {
  constructor() {
    super();
    this.intervalTime = 10000;
    this.state = { current: [], marks: {} }
    this.intervalInstance = null;
  }

  componentDidMount() {
    this.fetchingTS().then(() => {
      this.addMarks();
    });
    this.intervalInstance = setInterval(() => {
      this.fetchingTS();
    }, this.intervalTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalInstance);
  }

  addMarks = () => {
    this.state.monitoring.forEach(ts => {
      if (!(ts.tablespace in this.state.marks)) {
        this.setMark(ts.tablespace, 80);
      }
    });
  }

  setMark = (tablespace, newValue) => {
    var newMarks = Object.assign({}, this.state.marks);
    newMarks[tablespace] = {
      value: newValue
    }
    this.setState({ marks: newMarks });
  }

  fetchingTS = () => {
    return fetch(SERVER_URL + 'monitoring?type=ts')
      .then(r => r.json())
      .then(json => this.setState({ monitoring: json }))
      .catch(error => console.error('Error connecting to server: ' + error));
  }

  changeTs = (newTablespace) => {
    fetch(SERVER_URL + 'monitoring?type=getts&ts=' + newTablespace)
      .then(r => r.json())
      .then(json => this.setState({ current: json }))
      .catch(error => console.error('Error connecting to server: ' + error));
  }

  render() {
    return <section>
      <Row>
        <Chart marks={this.state.marks} monitoring={this.state.monitoring} />
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Tablespace;
