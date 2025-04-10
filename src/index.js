import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Education from './components/education.jsx';
import Experience from './components/experience.jsx';
import Projects from './components/projects.jsx';
import WhatIDo from './components/what-i-do.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';

ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <Intro />
        <About />
        <Education />
        <Experience />
        <Projects />
        <WhatIDo />
        <Contact />
        <BackToTop />
        <Preloader />
    </React.Fragment>,
document.getElementById('root'));

serviceWorker.unregister();
