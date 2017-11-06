import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Chart extends Component {
  barSize = 50;
  chart = {};
  chartHeight = 600;
  dataBusy = [];
  dataHighmark = [];
  dataMax = [];
  labelFontSize = 16;
  realHighmark = [];
  realMax = [];
  axisXinterval = 1;
  lineThickness = 0;

  componentDidMount() {
    this.chart = new window.CanvasJS.Chart('chartContainer2', {
      animationEnabled: true,
      axisX: {
        interval: this.axisXinterval,
        labelFontSize: this.labelFontSize,
        lineThickness: this.lineThickness
      },
      axisY2: {
        valueFormatString: '0 MB',
        lineThickness: this.lineThickness,
        labelFontSize: this.labelFontSize
      },
      toolTip: {
        shared: true,
        contentFormatter: function(e) {
          var busy = e.entries[0].dataPoint.y;
          var high = e.entries[1].dataPoint.y;
          var full = e.entries[2].dataPoint.y;

          high = high === 0 ? 0 : busy + high;
          full = high === 0 ? busy + full : high + full;

          busy = Math.round(busy);
          high = Math.round(high);
          full = Math.round(full);

          return ( e.entries[0].dataSeries.name + ' ' + busy + ' MB<br>'
                  + e.entries[1].dataSeries.name + ' ' + high + ' MB<br>'
                  + e.entries[2].dataSeries.name + ' ' + full + ' MB'
                );
        }
      },
      legend: {
        fontSize: this.labelFontSize,
        verticalAlign: 'top',
        horizontalAlign: 'center'
      },
      data: [
        {
          type: 'stackedBar',
          showInLegend: true,
          name: 'Busy MB',
          axisYType: 'secondary',
          color: '#CD5555',
          dataPoints: this.dataBusy
        },
        {
          type: 'stackedBar',
          showInLegend: true,
          name: 'HWM MB',
          axisYType: 'secondary',
          color: '#9bf09d',
          dataPoints: this.dataHighmark
        },
        {
          type: 'stackedBar',
          showInLegend: true,
          name: 'Max Size MB',
          axisYType: 'secondary',
          color: '#19a337',
          dataPoints: this.dataMax
        }
      ]
    });
    this.chart.render();
  }

  chartShouldUpdate() {
    let busy, highmark, max, highmarkBar, sortedTablespaces;
    sortedTablespaces = this.props.monitoring.sort( (a, b) => {
      if(a.tablespace < b.tablespace) return -1;
      if(a.tablespace > b.tablespace) return 1;
      return 0;
    });
    sortedTablespaces.forEach((ts, index) => {
      if (this.dataBusy.length === this.props.monitoring.length) {
        this.dataBusy.shift(); this.dataHighmark.shift(); this.dataMax.shift();
      }
      busy = ts.max_size - ts.free;
      highmark = ts.max_size - (ts.max_size * (1 - (this.props.highmark / 100)));
      highmarkBar = highmark - busy;
      if (highmarkBar > 0) {
        max = ts.max_size - (highmarkBar + busy);
      } else {
        highmarkBar = 0;
        max = ts.max_size - busy;
      }
      this.dataBusy.push({ y: busy, label: ts.tablespace });
      this.dataHighmark.push({ y: highmarkBar, label: ts.tablespace });
      this.dataMax.push({ y: max, label: ts.tablespace });
    });

    this.chart.render();
  }

  componentDidUpdate() {
    if(this.props.monitoring) {
      this.chartShouldUpdate();
    }
  }

  render() {
    return <Col xs={12}>
      <h1><strong>Tablespace Monitoring</strong></h1>
      <div id='chartContainer2' style={{ height: this.chartHeight + 'px', width: 100 + '%' }}></div>
    </Col>
  }
}

export default Chart;