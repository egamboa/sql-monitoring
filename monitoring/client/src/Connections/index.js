import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

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
      <Row>
        <Col sm={12}>
          <ListGroup>
            <ListGroupItem href="/#/results">Connection 1 - HSJD</ListGroupItem>
            <ListGroupItem href="/#/results">Connection 2 - Localhost</ListGroupItem>
            <ListGroupItem href="/#/results">Connection 3 - Away from home</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Connections;