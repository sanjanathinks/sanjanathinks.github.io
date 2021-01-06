import React, { Component } from 'react';
import Home from './components/Home';
import Abt from './components/About';
import { NavBar } from './components/Navigation';
import ToNoAl from './components/Tna';
import JamIt from './components/JamIt';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/sanjanathinks.github.io">
        <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <Abt />
      </Route>
      <Route exact path="/tna">
        <ToNoAl />
      </Route>
      <Route exact path="/jamit">
        <JamIt />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

{/*export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Hm} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={Abt} />
      </Switch>
    </div>
  );
};*/}