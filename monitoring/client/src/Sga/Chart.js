import React, { Component } from 'react';

class Chart extends Component {
  dataMax = [];
  dataFree = [];
  dataCurrent = [];
  dataHighmark = [];
  chart = {};

  toMB = (bytes) => {
    return bytes / 1024 / 1024;
  }

  rounding = (value) => {
    return Number.parseFloat(((value * 100) / 100).toFixed(2));
  }

  updateData = () => {  
    var max = 0, free = 0, current = 0, highmark = 0, date = new Date();
    if (this.props.monitoring.length > 0) {
      max = this.toMB(this.props.monitoring[0]['BYTES'] || 0);
      current = this.toMB(this.props.monitoring[1]['current'] || 0);
      free = max - current;
      highmark = max - (max * (1 - (this.props.highmark / 100)));
      max = this.rounding(max);
      current = this.rounding(current);
      free = this.rounding(free);
      highmark = this.rounding(highmark);
    }

    this.dataMax.push({
      x: date,
      y: max
    });

    this.dataFree.push({
      x: date,
      y: free
    });

    this.dataCurrent.push({
      x: date,
      y: current
    });

    this.dataHighmark.push({
      x: date,
      y: highmark
    });

    if(this.dataCurrent.length > 49) {
      this.dataMax.shift();
      this.dataCurrent.shift();
      this.dataFree.shift();
      this.dataHighmark.shift();
    }

    this.chart.options.data[0].legendText = ' Maximum SGA Size ' + this.dataMax[this.dataMax.length - 1].y + 'MB';
    this.chart.options.data[1].legendText = ' Free SGA Memory Available ' + this.dataFree[this.dataFree.length - 1].y + 'MB';
    this.chart.options.data[2].legendText = ' Current Allocated Memory ' + this.dataCurrent[this.dataCurrent.length - 1].y +'MB';
    this.chart.options.data[3].legendText = ' Highwater Mark MB ' + this.dataHighmark[this.dataHighmark.length - 1].y +'MB';

    this.chart.render();
  }
  
  componentDidMount() {
    this.chart = new window.CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      title: {
        text: 'SGA Memory Monitoring'
      },
      toolTip: {
        shared: true

      },
      legend: {
        verticalAlign: 'top',
        horizontalAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'calibri',
        fontColor: 'dimGrey',
        cursor: 'pointer',
        itemclick: function (e) {
          if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          }
          else {
            e.dataSeries.visible = true;
          }
          this.chart.render();
        }
      },
      axisX: {
        title: 'Chart updates every second'
      },
      axisY: {
        suffix: 'MB',
        includeZero: false
      },
      data: [{
        type: 'line',
        xValueType: 'dateTime',
        showInLegend: true,
        name: 'Maximum SGA Size MB',
        dataPoints: this.dataMax
      },
      {
        type: 'line',
        xValueType: 'dateTime',
        showInLegend: true,
        name: 'Free SGA Memory Available MB',
        dataPoints: this.dataFree
      },
      {
        type: 'line',
        xValueType: 'dateTime',
        showInLegend: true,
        name: 'Current Allocated Memory MB',
        dataPoints: this.dataCurrent
      },
      {
        type: 'line',
        xValueType: 'dateTime',
        showInLegend: true,
        name: 'Highwater Mark MB',
        dataPoints: this.dataHighmark
      }]
    });

    this.updateData();
  }

  componentDidUpdate() {
    this.updateData();
  }

  render() {

    return (
      <div id="chartContainer" style={{ height: 450 + "px", width: 100 + "%" }}>
      </div>
    );
  }
}

export default Chart;