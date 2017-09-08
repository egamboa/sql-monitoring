import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AppNav from './AppNav';
import Sga from './Sga/Sga';
import Tablespace from './Tablespace/Tablespace';

import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from './config';
import 'whatwg-fetch';

class App extends Component {

  constructor() {
    super();

    this.state = {
      serverInfo: {},
      clientInfo: {
        version: CLIENT_VERSION,
        react: REACT_VERSION
      }
    }
  }

  componentDidMount() {
    fetch(SERVER_URL + 'application')
      .then(r => r.json())
      .then(json => this.setState({ serverInfo: json }))
      .catch(error => console.error('Error connecting to server: ' + error));
  }

  render() {
    const serverInfo = this.state.serverInfo;
    const clientInfo = this.state.clientInfo;

    return (
      <div>
        <AppNav serverInfo={serverInfo} clientInfo={clientInfo} />
        <Grid>
          <div>
            <section>
              <Row>
                <Col xs={12}>
                  <h1>Oracle SQL Server Monitoring</h1>
                  <p>
                    This is a grails web application connecting to Oracle SQL server. Pulling the status of
                  the System General Area.
                </p>
                  <br /><hr /><br />
                </Col>
              </Row>
            </section>
            <Sga />
            <Tablespace />
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
