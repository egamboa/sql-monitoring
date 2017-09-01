import React, { Component } from 'react';
import 'whatwg-fetch';

import { SERVER_URL } from '../config';
import Graph from './Graph';
import Highmark from './Highmark';

class Sga extends Component {
  constructor () {
    super();

    this.state = {
      monitoring: [],
      highmark: '80'
    }
  }

  componentDidMount() {
    setInterval(() => {
      fetch(SERVER_URL + 'monitoring')
      .then(r => r.json())
      .then(json => this.setState({monitoring: json}))
      .catch(error => console.error('Error connecting to server: ' + error));
    }, 4000);
  }

  handleChange = (e) => {
    this.setState({ highmark: e.target.value });
  }

  render () {
    return <div>
      <section className="row colset-2-its">
        <h1 style={{textAlign: 'center'}}>SGA Memory Monitoring</h1>
        <br/>
        <p>
          This is a grails web application connecting to Oracle SQL server. Pulling the status of
          the System General Area.
        </p>
        <Highmark highmark={this.state.highmark} handleChange={this.handleChange}></Highmark>
      </section>
      <section>
        <Graph monitoring={this.state.monitoring} highmark={this.state.highmark}></Graph>
      </section>
    </div>
  }
}

export default Sga;
