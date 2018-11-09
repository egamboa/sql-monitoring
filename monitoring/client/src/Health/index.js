import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';

class Health extends Component {
  render() {
    return <section>
      <Row>
        <Col sm={12}>
          <Table responsive>
            <tbody>
              <tr>
                <td><h2>Database name:</h2></td>
                <td><h2><strong>HSJD</strong></h2></td>
              </tr>
              <tr>
                <td><h2>Open Mode:</h2></td>
                <td><h2><strong>READ WRITE</strong></h2></td>
              </tr>
              <tr>
                <td><h2>Log Mode:</h2></td>
                <td><h2><strong>NOARCHIVELOG</strong></h2></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Total Weight</th>
                <th>Acceptable %</th>
                <th>Warning %</th>
                <th>Danger %</th>
                <th>Current %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Consumo SGA</td>
                <td>0.25</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>50</strong></td>
              </tr>
              <tr>
                <td>Consumo SQL</td>
                <td>0.2</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>50</strong></td>
              </tr>
              <tr>
                <td>Bloqueos de la base de datos</td>
                <td>0.25</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>50</strong></td>
              </tr>
              <tr>
                <td>Consumo de memoria de Tablespaces</td>
                <td>0.2</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>50</strong></td>
              </tr>
              <tr>
                <td>Consumo de memoria de Conexiones</td>
                <td>0.1</td>
                <td>0.0 to  0.4</td>
                <td>0.41 to  0.6</td>
                <td>0.61 to  1</td>
                <td><strong>50</strong></td>
              </tr>
              <tr>
                <td><strong>Totals</strong></td>
                <td>1</td>
                <td colSpan="3"></td>
                <td><strong>50</strong></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </section>
  }
}

export default Health;
