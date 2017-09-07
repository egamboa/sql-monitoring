import React, { Component } from 'react';
import 'whatwg-fetch';

import { SERVER_URL } from '../config';
import Chart from './Chart';
import Highmark from './Highmark';

class Sga extends Component {
  constructor() {
    super();

    this.state = {
      monitoring: [],
      highmark: '80'
    }
  }

  componentDidMount() {
    setInterval(() => {
      fetch(SERVER_URL + 'monitoring?type=sga')
        .then(r => r.json())
        .then(json => this.setMonitoringData(json))
        .catch(error => console.error('Error connecting to server: ' + error));
    }, 1000);
  }

  setMonitoringData = (json) => {
    this.setState({ monitoring: json });
  }

  handleChange = (e) => {
    this.setState({ highmark: e.target.value });
  }

  render() {
    return <div>
      <section className="row colset-2-its">
        <h1 style={{ textAlign: 'center' }}>SGA Memory Monitoring</h1>
        <br />
        <p>
          This is a grails web application connecting to Oracle SQL server. Pulling the status of
          the System General Area.
        </p>
        <Highmark highmark={this.state.highmark} handleChange={this.handleChange}></Highmark>
      </section>
      <section>
        <Chart monitoring={this.state.monitoring} highmark={this.state.highmark} />
      </section>
    </div>
  }
}

export default Sga;
