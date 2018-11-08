import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Connections from './Connections';
import Results from './Results';
import NewCon from './NewCon';

function Main () {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/newcon' component={NewCon}/>
        <Route exact path='/connections' component={Connections}/>
        <Route exact path='/results' component={Results}/>
      </Switch>
    </main>
  );
}

export default Main;