import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Connections extends Component {
  render() {
    return <section>
      <Row className="show-grid">
        <Col sm={4}>
          Connections
        </Col>
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Connections;