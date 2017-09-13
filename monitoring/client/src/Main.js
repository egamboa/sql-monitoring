import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sga from './Sga';
import Tablespace from './Tablespace';

function Main () {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Sga}/>
        <Route path='/tablespace' component={Tablespace}/>
      </Switch>
    </main>
  );
}

export default Main;