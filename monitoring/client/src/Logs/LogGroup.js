import React, { Component } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import Log from './Log';

class LogGroup extends Component {
  render() {
    const title = (
      <h4>{this.props.group.title}</h4>
    );
    let logs = this.props.group.logs.map((log, index) => {
      return <Log key={index} switch={log.switch} title={log.title} status={log.status} dest={log.dest} />
    });
    return (
      <Col xs={4}>
        <Panel header={title} bsStyle="primary">
          <Row>
            {logs}
          </Row>
        </Panel>
      </Col>
    );
  }
}

export default LogGroup;
