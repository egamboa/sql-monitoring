import React, { Component } from 'react';
import Sga from '../Sga';
import Tablespace from '../Tablespace';
import Health from '../Health';
import { Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Results extends Component {

  render() {
    return <div>
      <Row className="show-grid">
        <Col sm={11}></Col>
        <Col sm={1}>
          <LinkContainer to='/connections'>
            <Button bsStyle="danger">Go Back</Button>
          </LinkContainer>
          <br />
        </Col>
      </Row>
      <Health></Health>
      <Sga></Sga>
      <Tablespace></Tablespace>
    </div>
  }
}

export default Results;
