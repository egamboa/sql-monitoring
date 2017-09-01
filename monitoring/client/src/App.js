import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import AppNav from './AppNav';
import Sga from './Sga/Sga';

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
      .then(json => this.setState({serverInfo: json}))
      .catch(error => console.error('Error connecting to server: ' + error));
  }

  render() {
    const serverInfo = this.state.serverInfo;
    const clientInfo = this.state.clientInfo;

    return (
      <div>
        <AppNav serverInfo={serverInfo} clientInfo={clientInfo}/>
        <Grid>
          <div id="content">
            <section>
              <div id="controllers" role="navigation">
                <h2>Available Controllers:</h2>
                <ul>
                  {serverInfo.controllers ? serverInfo.controllers.map(controller => {
                    return <li key={controller.name}><a href={SERVER_URL + controller.logicalPropertyName}>{ controller.name }</a></li>;
                  }) : null }
                </ul>
              </div>
            </section>
            <Sga></Sga>
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
