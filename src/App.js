import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Typed from 'react-typed';
import Navbar from './components/Navigation';
import { render } from '@testing-library/react';

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
    <div className = "sayhi">
      Hi, I'm Sanjana.
      <br></br>
      You can find me&nbsp;
      <Typed 
      strings={['coding meaningful products.', 'designing playful interfaces.', 'addressing inequity in our communities.']}
      typeSpeed={70}
      loop >
    </Typed>
    <br></br>
    Learn more about me here!
  </div>
  </div>
    );
  }
}
