import React, { Component } from 'react';
import RTChart from 'react-rt-chart';

import { SERVER_URL } from './config';
import 'whatwg-fetch';

class Graph extends Component {
  constructor() {
    super();

    this.state = {
      monitoring: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      fetch(SERVER_URL + 'monitoring')
      .then(r => r.json())
      .then(json => this.setState({monitoring: json}))
      .catch(error => console.error('Error connecting to server: ' + error));
    }, 2000);
  }

  render () {
    var max = 0, free = 0, current = 0;
    if (this.state.monitoring.length > 0) {
      max = this.state.monitoring[0]["BYTES"] || 0;
      free = this.state.monitoring[1]["BYTES"] || 0;
      current = max - free;
    }
    var data = {
      date: new Date(),
      'Maximum SGA Size': max,
      'Free SGA Memory Available': free,
      'Current Allocated Memory': current
    };

    return <RTChart
            fields={['Maximum SGA Size','Free SGA Memory Available', 'Current Allocated Memory']} 
            data={data} />
  }
}

export default Graph;
