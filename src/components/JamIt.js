import './Proj.scss'
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Typed from 'react-typed';
import { render } from '@testing-library/react';
import together from './tna.png';
import { Switch, Route, Link } from 'react-router-dom';
import jamitheader from './header_jamit.png';
import styletna from './style_tna.png';
import ji1 from './ji1.png';
import ji2 from './ji2.png';
import ji3 from './ji3.png';

const JamIt = () => {
    const styleObj = {
        fontWeight: '600',
    }
    return (
        <div>
            <img 
            src = {jamitheader}
            className = "tnah" />
            <div className = "align-center">
            <h2 className = "heading">
                Jam It
            </h2>
            <h4 className = "skill-set">
                UI/UX Research
            </h4>
            <div className = "page-wrapper">
            <div className = "row">
                <div className = "double-column">
                <div className = "column">
                    <br></br>
                    <h4 className = "intro-headline">Proposal</h4>
                    <p className="info">
                        COVID-19 hit the music industry hard, with 
                        live performance revenue being the biggest casualty, costing
                        more than $10 billion in sponsorships. In order to provide a safer,
                        enaging alternative to the in-person concert experience, I created
                        Jam It, a VR music-sharing community that enables a personal connection
                        between concert-goers and musicians.
                    </p>
                </div>
                </div>
                <div className = "column">
                    <br></br>
                    <h4 className = "intro-headline">Tools</h4>
                    <p className = "info">
                    User research
                    <br></br>
                    Wireframing
                    <br></br>
                    Figma
                    </p>
                    <h4 className = "intro-headline">Timeline</h4>
                    <p className = "info">
                    1 month, March 2020 - April 2020
                    </p>
                </div>
            </div>
            </div>
            <div className = "spacer">
                <h4 className = "intro-headline">Research</h4>
                <div className = "info">
                <p className = "question-box" style={styleObj}>What does Gen Z crave in terms of music entertainment?</p>
                I looked through various case studies to draw the conclusion that concert-goers highlighted the lack of meaningful connection with others, 
                along with constrained social experiences as a critical issue. Another problem was the limited exposure most 
                young adults had to local musicians. Hosting a concert 
                requires a surplus of funds, which most starting musicians and bands lack.
                <br></br>
                <br></br>
                A viable alternative to a traditional concert is a VR music experience, in which users are able to support 
                their favorite artists and e-meet new people.
                </div>
            </div>
            <div className = "spacer">
                <h4 className = "intro-headline">Product</h4>
                <div className = "info">
                <p className = "question-box" style={styleObj}>Introducing Jam It!</p>
                Jam It is an inexpensive VR platform that costs a cup of morning coffee at Starbucks. 
                Musicians and their fans can create their own music concert venues through drag and drop designs.
                </div>
            </div>
            <br></br>
            <div className = "page-wrapper">
            <div className = "row_ji">
                <div className = "col_ji">
                    <img src = {ji1}
                    className = "jamitimg"/>
                </div>
                <div className = "col_ji intro_ji">
                    <br></br>
                    <h4 className = "intro-headline">Browse and Explore</h4>
                    <p className = "info">
                    Concert Hall is the perfect place for users to explore concerts being 
                    hosted by local artists, as well as advertise their own venues.
                    </p>
                </div>
            </div>
    </div>
    <div className = "page-wrapper">
            <div className = "row_ji">
                <div className = "col_ji">
                    <img src = {ji2}
                    className = "jamitimg"/>
                </div>
                <div className = "col_ji intro_ji">
                    <br></br>
                    <h4 className = "intro-headline">Practice and Progress</h4>
                    <p className = "info">
                    Users can practice for their shows through an interactive VR experience with instruments. 
                    They can check their progress, which is measured through a JamScore.
                    </p>
                </div>
            </div>
    </div>
    <div className = "page-wrapper">
            <div className = "row_ji">
                <div className = "col_ji">
                    <img src = {ji3}
                    className = "jamitimg"/>
                </div>
                <div className = "col_ji intro_ji">
                    <br></br>
                    <h4 className = "intro-headline">Connect and Captivate</h4>
                    <p className = "info">
                    While at a concert, users are able to communicate with each other and provide feedback on their experience.
                    </p>
                </div>
            </div>
    </div>
    <div className = "spacer">
                <h4 className = "intro-headline">Takeaways</h4>
                <div className = "info">
                This project was an exercise in creativity, market research and product design, 
                as I scoured the Internet for VR recreational usage within millenials in order to actualize this idea. 
                Along the way, I learned critical UI/UX terms 
                such as user persona, gestalt principles, and A/B testing.
                </div>
            </div>
            <div className = "spacer">
                <h4 className = "intro-headline">What's Next</h4>
                <div className = "info">
                <p className = "question-box" style={styleObj}>Customizable and shareable options for recording progress and leveling up</p>
                We could introduce a "Jam Score" that keeps track of login streak, medals earned and status within the game. 
                A central question: How are levels integral to the game? What privileges are higher level players granted?
                <br></br>
                <br></br>
                <p className = "question-box" style={styleObj}>Addressing backend features of app development</p>
                Primarily, the main concern here is intermixing AI scripts with an app development platform that supports VR. 
                Taking care of this issue would require additional technical research and understanding of systems engineering.
                </div>
            </div>
            <div class="stage">
            <a href = "/tna" className = "boring_link">
    <div class="box bounce-3">
        Together Not Alone &#10174;
    </div>
    </a>
</div>
<br></br>
        <br></br>
        </div>
        <br></br>
        <br></br>
        </div>
    );
}
export default JamIt;