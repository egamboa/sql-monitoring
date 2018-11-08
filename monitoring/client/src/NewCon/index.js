import React, { Component } from 'react';
import { Row, Col, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NewCon extends Component {
  render() {
    return <section>
      <Row className="show-grid">
        <Col sm={8}></Col>
        <Col sm={4}>
          <LinkContainer to='/connections'>
            <Button bsStyle="danger">Cancelar Conexion</Button>
          </LinkContainer>
          <br />
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <FormGroup>
            <ControlLabel>Nombre de Conexion</ControlLabel>
            <FormControl type="text" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Hostname</ControlLabel>
            <FormControl type="text"/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Puerto</ControlLabel>
            <FormControl type="text"/></FormGroup>
          <FormGroup>
            <ControlLabel>Usuario</ControlLabel>
            <FormControl type="text"/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Contrasena</ControlLabel>
            <FormControl type="text"/>
          </FormGroup>
          <LinkContainer to='/connections'>
            <Button bsStyle="success" bsSize="large">Agregar Conexion</Button>            
          </LinkContainer>
        </Col>
      </Row>
      <Row>
        <br /><hr /><br />
      </Row>
    </section>
  }
}

export default NewCon;