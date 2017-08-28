import React, { Component } from 'react';
import RTChart from 'react-rt-chart';

class Graph extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  render () {
    var data = {
      date: new Date(),
      Car: 100,
      Bus: 200
    };

    return <RTChart
            fields={['Car','Bus']}
            data={data} />
  }
}

export default Graph;
