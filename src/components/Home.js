import './Home.scss';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Typed from 'react-typed';
import { render } from '@testing-library/react';
import together from './tna.png';
import jamitproduct from './jamit.png';
import { Switch, Route, Link } from 'react-router-dom';

//const Home = () =>
class Home extends Component{
  render() {
        return (
            <div>
                <div className = "sayhi">
      Hi, I'm Sanjana.
      <div className = "typedhi">
      You can find me&nbsp;
      <Typed 
      strings={['coding meaningful products.', 'designing playful interfaces.', 'addressing inequity in our communities.']}
      typeSpeed={70}
      loop >
    </Typed>
    </div>
    <div className = "banner">
    <div className = "learnmore">
    Learn more about me <a href = "/about">here</a>!
    </div>
    <div className = "rowC">
    <div className = "image">
      <a href = "/tna">
      <img 
      src = {together}
      alt="Together Not Alone"
      className = "image-img pic-align"
      />
      <div className = "img-overlay img-overlay-blur">
        <div className = "img-title">
          Together Not Alone
          <p className = "img-description">
            ui/ux &#38; front-end
          </p>
        </div>
      </div>
      </a>
    </div>
    <div className = "image margin-align">
      <a href = "/jamit">
      <img 
      src = {jamitproduct}
      alt="Jam It Case Study"
      className = "image-img pic-align"
      />
      <div className = "img-overlay img-overlay-blur">
        <div className = "img-title">
          Jam It
          <p className = "img-description">
            ui/ux research
          </p>
        </div>
      </div>
      </a>
    </div>
    </div>
    </div>
    </div>
    </div>
        );
  }
}
export default Home;