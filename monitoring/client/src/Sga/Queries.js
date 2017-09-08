import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';

class Queries extends Component {

  render() {
    let sqls = this.props.queries.map((sql, index) => {
      return <tr key={index}>
        <td>{sql.USERNAME}</td>
        <td>{sql.SQL_TEXT}</td>
      </tr>;
    });
    return (
      <Row className="show-grid">
        <Col xs={12}>
          <h1 className="pull-left">Current Queries </h1>
        </Col>
        <Col xs={12}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Username</th>
                <th>Query</th>
              </tr>
            </thead>
            <tbody>
              {sqls}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

export default Queries;