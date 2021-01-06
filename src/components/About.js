import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Typed from 'react-typed';
import Navbar from './Navigation';
import Foot from './Footer';
import { Switch, Route, Link } from 'react-router-dom';
import './About-Style.scss';
import profpic from "./1001.png";

//const About = props =>
class About extends Component{
    render() {
    return(
        <div>
            <div class = "row_abt">
                <div class="col_abt padder_col">
                <br></br>
                <h2 className="header">
                <Typed 
      strings={["A lil' bit about me"]}
      typeSpeed={70}>
    </Typed>
                </h2>
            <p className="middlep">
                A senior at Rutgers University studying Computer Science and Biology,
                I appreciate the intricacies of the world around us. On campus,
                I'm known as a tech geek obsessed with 3am conversations on public policy, 
                entrepreneurship, design, data analytics and art. I love STEM, but it's missing
                something without that 'A' after the 'E'. 
                <br></br>
                <br></br>
                Currently, I'm a research assistant at Harvard Center for Geographic Analysis,
                where I use R to optimize pandemic prevention policies. There are a few other ventures
                I'm pursuing, but I'd like to keep them private until their release. Past activities
                include researching at Bromberg Lab, serving as web designer for Together Not Alone,
                and presenting an educational initiative for cyberbullying awareness in New Brunswick School District
                in front of 50+ Rutgers faculty/students.
                <br></br>
                <br></br>
                If you're looking to collaborate or just want to say hi, feel free to email me at <a href = "mailto:sanjanapendharkar01@gmail.com">sanjanapendharkar01@gmail.com</a> or
                shoot me a message on <a href = "https://www.linkedin.com/in/sanjanapendharkar/">LinkedIn</a>.
                Let's talk!
            </p>
                </div>
                <div class="col_abt adj_below">
                <img src = {profpic} alt="cannot display" className="profpicstyle"/>
                </div>
            </div>
        </div>
    );
    }
}
export default About;