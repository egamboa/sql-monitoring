import React, { Component } from 'react';

class Chart extends Component {
  dataBusy = [];
  dataHighmark = [];
  dataMax = [];
  chart = {};
  realHighmark = [];
  realMax = [];

  componentDidMount() {
    this.chart = new window.CanvasJS.Chart("chartContainer2", {
      title: {
        text: "Tablespace Disk Usage"
      },
      animationEnabled: true,
      axisX: {
        interval: 1,
        labelFontSize: 16,
        lineThickness: 0
      },
      axisY2: {
        valueFormatString: "0 MB",
        lineThickness: 0,
        labelFontSize: 16
      },
      toolTip: {
        shared: true
      },
      legend: {
        fontSize: 16,
        verticalAlign: "top",
        horizontalAlign: "center"
      },
      data: [
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Busy MB",
          axisYType: "secondary",
          color: "#CD5555",
          dataPoints: this.dataBusy
        },
        {
          type: "stackedBar",
          showInLegend: true,
          name: "HWM MB",
          axisYType: "secondary",
          color: "#9bf09d",
          dataPoints: this.dataHighmark
        },
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Max Size MB",
          axisYType: "secondary",
          color: "#19a337",
          dataPoints: this.dataMax
        }
      ]
    });
    this.chart.render();
  }

  componentDidUpdate() {
    let busy, highmark, max, highmarkBar;

    this.props.monitoring.forEach((ts, index) => {
      if (this.dataBusy.length === this.props.monitoring.length) {
        this.dataBusy.shift(); this.dataHighmark.shift(); this.dataMax.shift();
      }
      busy = ts.max_size - ts.free;
      highmark = ts.max_size - (ts.max_size * (1 - (this.props.highmark / 100)));
      highmarkBar = highmark - busy;
      if(highmarkBar > 0) {
        max = ts.max_size - (highmarkBar + busy);
      } else {
        highmarkBar = 0;
        max = ts.max_size - busy;
      }
      this.dataBusy.push({ y: busy, label: ts.tablespace });
      this.dataHighmark.push({ y: highmarkBar, label: ts.tablespace });
      this.dataMax.push({ y: max, label: ts.tablespace });
      this.realHighmark.push({ y: highmark, label: ts.tablespace });
      this.realMax.push({ y: ts.max_size, label: ts.tablespace });
    });
 
    // this.chart.data[1].options.dataPoints = this.realHighmark;
    // this.chart.data[2].options.dataPoints = this.realMax;
    console.log(this.chart.data[2].options);
    
    this.chart.render();
  }

  render() {
    return (
      <div id="chartContainer2" style={{ height: 600 + "px", width: 100 + "%" }}></div>
    );
  }
}

export default Chart;