import React, { Component } from 'react';

class Chart extends Component {
  chart = {};

  componentDidMount() {
    this.chart = new window.CanvasJS.Chart("chartContainer2", {
      title: {
        text: "Tablespace Disk Usage"
      },
      animationEnabled: true,
      axisX: {
        interval: 1,
        labelFontSize: 10,
        lineThickness: 0
      },
      axisY2: {
        valueFormatString: "0 GB",
        lineThickness: 0
      },
      toolTip: {
        shared: true
      },
      legend: {
        verticalAlign: "top",
        horizontalAlign: "center"
      },

      data: [
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Busy Space GB",
          axisYType: "secondary",
          color: "#7E8F74",
          dataPoints: [
            { y: 3, label: "Tablespace 1" },
            { y: 5, label: "Tablespace 2" },
            { y: 3, label: "Tablespace 3" },
            { y: 6, label: "Tablespace 4" }
          ]
        },
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Highwater Mark GB",
          axisYType: "secondary",
          color: "#F0E6A7",
          dataPoints: [
            { y: .5, label: "Tablespace 1" },
            { y: 1.5, label: "Tablespace 2" },
            { y: 1, label: "Tablespace 3" },
            { y: 2, label: "Tablespace 4" }
          ]
        },
        {
          type: "stackedBar",
          showInLegend: true,
          name: "Maxsize Space GB",
          axisYType: "secondary",
          color: "#EBB88A",
          dataPoints: [
            { y: 2, label: "Tablespace 1" },
            { y: 3, label: "Tablespace 2" },
            { y: 3, label: "Tablespace 3" },
            { y: 3, label: "Tablespace 4" }
          ]
        }
      ]
    });
    this.chart.render();
  }

  render() {
    return (
      <div id="chartContainer2" style={{ height: 600 + "px", width: 100 + "%" }}></div>
    );
  }
}

export default Chart;