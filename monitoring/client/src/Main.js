import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Results from './Results';

function Main () {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Results}/>
      </Switch>
    </main>
  );
}

export default Main;