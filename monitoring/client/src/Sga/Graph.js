import React, { Component } from 'react';
import RTChart from 'react-rt-chart';
import {LineChart} from 'react-d3-basic';
import moduleName from 'moment';

class Graph extends Component {

  toMB = (bytes) => {
    return bytes / 1024 / 1024;
  }

  render() {
    var max = 900, free = 900, current = 900, highmark = 900;
    if (this.props.monitoring.length > 0) {
      max = this.toMB(this.props.monitoring[0]["BYTES"] || 0);
      free = this.toMB(this.props.monitoring[1]["BYTES"] || 0);
      current = max - free;
      highmark = max - (max * (1 - (this.props.highmark / 100)));
    }
    var data = {
      date: new Date(),
      'Maximum SGA Size MB': max,
      'Free SGA Memory Available MB': free,
      'Current Allocated Memory MB': current,
      'Highwater Mark MB': highmark
    };

    // your date format, use for parsing
    var parseDate = d3.time.format("%YM%m").parse;
  
    var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = "Tomala que es tuya",
      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line
      chartSeries = [
        {
          field: 'total',
          name: 'Total'
        },
        {
          field: 'incineration',
          name: 'Incineration'
        },
        {
          field: 'garbageBury',
          name: 'Garbage Bury',
          area: true
        }
      ],
      // your x accessor
      x = function(d) {
        return parseDate(d.month);
      },
      xScale = 'time';

    var chartData = [{
      name: "Lavon Hilll I",
      BMI: 20.57,
      age: 12,
      birthday: "1994-10-26T00:00:00.000Z",
      city: "Annatown",
      married: true,
      index: 1
    },
    {
      name: "Clovis Pagac",
      BMI: 24.28,
      age: 26,
      birthday: "1995-11-10T00:00:00.000Z",
      city: "South Eldredtown",
      married: false,
      index: 3
    },
    {
      name: "Gaylord Paucek",
      BMI: 24.41,
      age: 30,
      birthday: "1975-06-12T00:00:00.000Z",
      city: "Koeppchester",
      married: true,
      index: 5
    },
    {
      name: "Ashlynn Kuhn MD",
      BMI: 23.77,
      age: 32,
      birthday: "1985-08-09T00:00:00.000Z",
      city: "West Josiemouth",
      married: false,
      index: 6
    }];

    return <div>
      <RTChart
        fields={['Maximum SGA Size MB', 'Free SGA Memory Available MB', 'Current Allocated Memory MB', 'Highwater Mark MB']}
        data={data} />    
      <LineChart
      title={title}
      data={chartData}
      width={width}
      height={height}
      margins={margins}
      chartSeries={chartSeries}
      x={x}
      xScale={xScale} />
    </div>
  }
}

export default Graph;
