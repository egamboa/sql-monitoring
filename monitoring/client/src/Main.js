import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sga from './Sga';
import Tablespace from './Tablespace';
import Logs from './Logs';

function Main () {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Sga}/>
        <Route path='/tablespace' component={Tablespace}/>
        <Route path='/logs' component={Logs}/>
      </Switch>
    </main>
  );
}

export default Main;