import React, { Component } from 'react';
import { Row, Col, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Login extends Component {
  render() {
    return <section>
      <Row className="show-grid">
        <Col sm={4}>
          <h1><strong>Inicio Sesion</strong></h1>
          <br />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <FormGroup>
            <ControlLabel>Usuario</ControlLabel>
            <FormControl type="text"/></FormGroup>
          <FormGroup>
            <ControlLabel>Contrasena</ControlLabel>
            <FormControl type="text"/>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <LinkContainer to='/connections'>
            <Button bsStyle="success" bsSize="large">Login</Button>
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default Login;