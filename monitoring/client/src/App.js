import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AppNav from './AppNav';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div>
        <AppNav/>
        <Grid>
          <section>
            <Row>
              <Col xs={12}>
                <h1>Performance Monitor para sistemas de bases de datos distribuidas</h1>
                <p>This is a grails web application connecting to Oracle SQL server.</p>
                <br /><hr /><br />
              </Col>
            </Row>
          </section>
          <Main />
        </Grid>
      </div>
    );
  }
}

export default App;
