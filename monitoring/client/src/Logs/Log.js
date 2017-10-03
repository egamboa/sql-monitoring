import React, { Component } from 'react';
import { Col, Panel, Table } from 'react-bootstrap';

class Log extends Component {
  render() {
    const title = (
      <h5>{this.props.title}</h5>
    );
    return (
      <Col xs={12} md={12}>
        <Panel header={title} bsStyle={this.props.status}>
          <div className='status stale text-center'>
            <img width='80' alt='logfile' src='/logfile.png' />
          </div>
          <div className='stats'>
          <Table responsive={true} >
            <tbody>
              <tr>
                <td><strong>Status:</strong></td>
                <td>{this.props.status}</td>
              </tr>
              <tr>
                <td><strong>Switch Time:</strong></td>
                <td>{this.props.switch}h</td>
              </tr>
              <tr>
                <td><strong>Destination:</strong></td>
                <td>{this.props.dest}</td>
              </tr>
            </tbody>
          </Table>
          </div>
        </Panel>
      </Col>
    );
  }
}

export default Log;
