import './Proj.scss'
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Typed from 'react-typed';
import { render } from '@testing-library/react';
import together from './tna.png';
import { Switch, Route, Link } from 'react-router-dom';
import tnaheader from './header_tna.png';
import styletna from './style_tna.png';

const Tna = () => {
    const styleObj = {
        fontWeight: '600',
    }
    return (
        <div>
            <img 
            src = {tnaheader}
            className = "tnah" />
            <div className = "align-center">
            <h2 className = "heading">
                Together Not Alone
            </h2>
            <h4 className = "skill-set">
                Web Development, UI/UX
            </h4>
            <div className = "page-wrapper">
            <div className = "row">
                <div className = "double-column">
                <div className = "column">
                    <br></br>
                    <h4 className = "intro-headline">Proposal</h4>
                    <p className="info">
                        When I joined Together Not Alone,
                        a local mental health nonprofit, I mentioned
                        the need to transition from a pre-made Wix template site
                        to an actual, custom-made website that would reflect our brand image.
                        <br></br>
                        You can view our finalized website <a href = "https://togethernotalone.github.io/">here</a>.
                    </p>
                </div>
                </div>
                <div className = "column">
                    <br></br>
                    <h4 className = "intro-headline">Tools</h4>
                    <p className = "info">
                    Invision Studio
                    <br></br>
                    HTML/CSS
                    <br></br>
                    JavaScript
                    </p>
                    <h4 className = "intro-headline">Timeline</h4>
                    <p className = "info">
                    5 months, December 2019 - May 2020
                    </p>
                </div>
            </div>
            </div>
            <div className = "spacer">
                <h4 className = "intro-headline">Background</h4>
                <div className = "info">
                <p className = "question-box" style={styleObj}>What is Together Not Alone?</p>
                Together Not Alone is a mental health awareness organization 
                founded by Douglass students. 
                Our primary meetings with members are through Talk Times, 
                which are workshops that facilitate conversation on mental health 
                topics, such as anxiety or panic attacks. Although we are based on 
                the Rutgers campus, we have developed a marketing and outreach strategy that 
                addresses the larger New Brunswick community as well.
                </div>
            </div>
            <div className = "spacer">
                <h4 className = "intro-headline">Brand Image</h4>
                <div className = "info">
                <p className = "question-box" style={styleObj}>Logo and Feel?</p>
                As our name is ‘Together Not Alone’, our logo of two polar bears sitting side by side reflects the warm and supportive community we seek to create. In designing the website’s color scheme, I first researched colors that fit our 
                organizational goals of bringing positivity into mental 
                health scene.
                <br></br>
                <br></br>
                I knew that blue was the central color 
                I wanted to use, as it reflected well with our logo. 
                I considered the following supplementary colors: 
                purple, yellow and orange. I ended up going with light 
                blue and a mixed hue of blue and purple for our gradient on every page.
                </div>
            </div>
            <br></br>
            <img src = {styletna} className = "styletnah"/>
            <div className = "caption">Style tile for Website</div>
            <div className = "spacer">
                <h4 className = "intro-headline">Pain Points</h4>
                <div className = "info">
                <p className = "question-box" style={styleObj}>
                How can we improve?
                </p>
                </div>
                <br></br>
                <div className = "info">
                I talked to several of our board members about our website, 
                to hear their opinions on what needed to change. 
                Through these conversations, I was able to pinpoint the pain points.
                </div>
                <br></br>
                <br></br>
                <h5 className = "intro-headline">01: Interactivity and Appeal</h5>
                <div className = "info">
                The original website did not engage the user by providing them with the option of touching or scrolling through elements.
                <br></br>
                <br></br>
                <p className = "question-box" style={styleObj}>Design Goal:</p> 
                <ul>
                    <li>Opt for elements that directly interact with the user through touch and sight.</li>
                </ul>
                <br></br>
                <p className = "question-box" style={styleObj}>What will this look like? </p>
                For the events panel, using Swiper.js and cards 
                to enable users to scroll through event details and pictures. 
                Adding hyperlinks when referring to outside articles or elements. 
                Add drop down menus to the navigation bar.
                <br></br>
                <br></br>
                <br></br>
                </div>
                <h5 className = "intro-headline">02: Acknowledgement of Rutgers Chapter</h5>
                <div className = "info">
                Although we had established a Rutgers chapter by December 2019, our Wix site did not mention their presence and their accomplishments.
                <br></br>
                <br></br>
                <p className = "question-box" style={styleObj}>Design Goal: </p>
                <ul>
                    <li> Introduce pages that alert users of local chapter events, and how they can tune in.</li>
                    <li> Mention all members, with details about their contributions.</li>
                </ul>
                <br></br>
                <p className = "question-box" style={styleObj}>What will this look like?</p>
                In designing, I realized that combining the members and events 
                pages for the chapter did not mesh well, so I separated both pages, 
                but grouped them into one drop-down menu. 
                I used a simple card layout along with consistent typography 
                for the members and events pages.
                </div>
            </div>
            <div className = "spacer">
                <h4 className = "intro-headline">Takeaways</h4>
                <div className = "info">
                When I first started this project, I was a complete newbie to 
                static web development. By working on this website, I gained 
                exposure to design principles used in websites, and learned the 
                importance of animation and interactivity. After this culminated, I delved 
                into frameworks such as Angular and React in order to understand how interactive, dynamic websites are made, and 
                started considering front-end web development as a potential career.
                </div>
            </div>
            <div className = "spacer">
                <h4 className = "intro-headline">What's Next</h4>
                <div className = "info">
                <p className = "question-box" style={styleObj}>Adding an email subscription for newsletters and exclusive content.</p>
                This would create a sense of community in our users and provide interactivity to the website. 
                As of now, since our website has been built through mark-up languages and some JavaScript, 
                I don’t know if this feature is possible. I will be exploring other frameworks that allow this feature as our organization continues to grow.
                <br></br>
                <br></br>
                <p className = "question-box" style={styleObj}>Incorporating a donation and fundraising page.</p>

                As our organization scales, we could provide users with ideas on how to start a fundraiser to earn money for us 
                through activities such as bake sales, graduation gifts, and musical performances. 
                I would consider adding an interactive donation page and save the donor’s information in a database. 
                This would require additional research on web backend technologies, such as PHP and Python.
                </div>
            </div>
        </div>
        <div class="stage">
            <a href = "/jamit" className = "boring_link arrange_ji">
    <div class="box bounce-3">
        Jam It &#10174;
    </div>
    </a>
</div>
<br></br>
        <br></br>
        </div>
    );
}
export default Tna;