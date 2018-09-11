import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Selector from './Selector';
import Description from './Description';

class CurrentTablespace extends Component {
  
  sortedTablespaces = [];

  updateMark = (highmark) => {
    this.props.updateMark(highmark, this.props.current[0].TABLESPACE_NAME);
  }

  render() {
    if(this.props.monitoring) {
      this.sortedTablespaces = this.props.monitoring.sort( (a, b) => {
        if(a.tablespace < b.tablespace) return -1;
        if(a.tablespace > b.tablespace) return 1;
        return 0;
      });
    }

    return (
      <Col xs={12}>
        <h1><strong>Current Tablespace</strong></h1>
        <Col xs={3}>
          <Selector updateMark={this.updateMark} current={this.props.current} changeTs={this.props.changeTs} tablespaces={this.sortedTablespaces} />
        </Col>
        <Col xs={8} xsOffset={1}>
          <Description />
        </Col>
      </Col>
    );
  }
}

export default CurrentTablespace;
