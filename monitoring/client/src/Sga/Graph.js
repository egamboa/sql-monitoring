import React, { Component } from 'react';
import RTChart from 'react-rt-chart';

class Graph extends Component {

  toMB = (bytes) => {
    return bytes / 1024 / 1024;
  }

  render() {
    var max = 0, free = 0, current = 0, highmark = 0;
    if (this.props.monitoring.length > 0) {
      max = this.toMB(this.props.monitoring[0]["BYTES"] || 0);
      free = this.toMB(this.props.monitoring[1]["BYTES"] || 0);
      current = max - free;
      highmark = max - (max * (1 - (this.props.highmark / 100)));
    }
    var data = {
      date: new Date(),
      'Maximum SGA Size mb': max,
      'Free SGA Memory Available mb': free,
      'Current Allocated Memory mb': current,
      'Highwater Mark mb': highmark
    };

    return <RTChart
      fields={['Maximum SGA Size', 'Free SGA Memory Available', 'Current Allocated Memory', 'Highwater Mark']}
      data={data} />
  }
}

export default Graph;
