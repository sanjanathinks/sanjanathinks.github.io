import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import m from './main.png';
import Nav from './Nav.css';

class Navbar extends Component {
    render() {
        return (
            <ReactBootStrap.Navbar bg="none" expand="md" className = "alignment-bar">
            <ReactBootStrap.Navbar.Brand href="#work">
              <img
              src = {m}
              width = "100"
              height = "90"
              className="align-dwn"
              alt = "Sanjana's personal website"
              style={{position: 'inline-block', bottom: -10}}
              />
            </ReactBootStrap.Navbar.Brand>
              <ReactBootStrap.Nav className="navfont ml-auto">
                <ReactBootStrap.Nav.Link href="#work" className = "w">Work</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#about" className = "a">About</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#resume" className = "r">Resume</ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar>
        );
    }
}
export default Navbar;