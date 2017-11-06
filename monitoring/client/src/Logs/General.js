import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class General extends Component {

  render() {
    return (
      <div>
        <h3>General Logging Information</h3>
        <Table responsive={true} >
          <tbody>
            <tr>
              <td><strong>Auto Archive Mode:</strong></td>
              <td><strong>{this.props.archiveMode}</strong></td>
              <td><strong>AAudit Trail Mode:</strong></td>
              <td><strong>{this.props.auditTrailMode}</strong></td>
            </tr>
            <tr>
              <td><strong>Switch Time Avg:</strong></td>
              <td>Avg: <strong>{this.props.avg} hours</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Transactions indexes:</strong></td>
              <td>Previous: <strong>{this.props.prev}</strong></td>
              <td>Actual: <strong>{this.props.actual}</strong></td>
              <td>Next: <strong>{this.props.next}</strong></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default General;
