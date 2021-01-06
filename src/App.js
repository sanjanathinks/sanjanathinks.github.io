import './App.scss';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Typed from 'react-typed';
import NavBar from './components/Navigation';
import Foot from './components/Footer';
import About from './components/About';
import { render } from '@testing-library/react';
import together from './components/tna.png';
import jamitproduct from './components/jamit.png';
import Hm from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './routes.js';
import ToNoAl from './components/Tna';
import JamIt from './components/JamIt';
import Routes from './routes';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import m from './components/main.png';
import sp_resume from './components/Sanjana_Pendharkar.pdf';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar className="ml-auto navfont alignment-bar">
        <Navbar.Brand href="/">
        <img
              src = {m}
              width = "100"
              height = "90"
              className="align-dwn"
              alt = "Sanjana's personal website"
              style={{position: 'inline-block', bottom: -10}}
              />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/about" component={About}>About</Nav.Link>
            <Nav.Link href={sp_resume} target = "_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
      </BrowserRouter>
    </div>
  );
}
export default App;