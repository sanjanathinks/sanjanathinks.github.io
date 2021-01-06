import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import email from './email.png';
import linkedin from './linkedin.png';
import Foot from './foot.scss';

class Footer extends Component {
    render() {
        return (
            <div>
            <h2 className = "center-footer cn">
                Let's connect!
            </h2>
            <p className = "center-footer ic">
                The first cup of macchiato is on me.
            </p>
            <div className = "icons">
                <a href = "https://www.linkedin.com/in/sanjanapendharkar/">
                <img src = {linkedin} 
                    className = "l-icon"
                />
                </a>
                <a href = "mailto:sanjana.pendharkar@rutgers.edu">
                <img src = {email} 
                    className = "e-icon"
                />
                </a>
            </div>
            </div>
        );
    }
}
export default Footer;
