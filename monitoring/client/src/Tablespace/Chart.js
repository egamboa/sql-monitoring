import React, { Component } from 'react';

class Chart extends Component {
  dataBusy = [];
  dataHighmark = [];
  dataMax = [];
  chart = {};

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
          name: "Busy Space MB",
          axisYType: "secondary",
          color: "#7E8F74",
          dataPoints: this.dataBusy
        },
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Highwater Mark MB",
          axisYType: "secondary",
          color: "#F0E6A7",
          dataPoints: this.dataHighmark
        },
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Maxsize Space MB",
          axisYType: "secondary",
          color: "#EBB88A",
          dataPoints: this.dataMax
        }
      ]
    });
    this.chart.render();
  }

  componentDidUpdate() {
    let busy, highmark, max;

    this.props.monitoring.forEach((ts) => {
      if (this.dataBusy.length === this.props.monitoring.length) {
        this.dataBusy.shift(); this.dataHighmark.shift(); this.dataMax.shift();
      }
      busy = ts.max_size - ts.free;
      highmark = (ts.max_size - (ts.max_size * (1 - (this.props.highmark / 100)))) - busy;
      if(highmark > 0) {
        max = ts.max_size - (highmark + busy);
      } else {
        max = ts.max_size - busy;
      }
      this.dataBusy.push({ y: busy, label: ts.tablespace });
      this.dataHighmark.push({ y: highmark, label: ts.tablespace });
      this.dataMax.push({ y: max, label: ts.tablespace });
    });

    //this.chart.options.data[0].legendText = ' Maximum SGA Size ' + this.dataMax[this.dataMax.length - 1].y + 'MB';
    
    this.chart.render();
  }

  render() {
    return (
      <div id="chartContainer2" style={{ height: 600 + "px", width: 100 + "%" }}></div>
    );
  }
}

export default Chart;