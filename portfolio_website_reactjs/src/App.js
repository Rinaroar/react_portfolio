import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Experience from './contents/Experience';
/* import Skills from './contents/Skills'; */
import SkillsView from './contents/SkillsView';
import {skillsData} from './components/SkillHook';
import Contact from './contents/Contact';
import Hobby from './contents/Hobby';
import Projects from './contents/Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/react_portfolio">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/experiences">
          <Experience />
        </Route>

        <Route exact path="/skills">
          {/* <Skills /> */}
          <SkillsView skillsData={skillsData} />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/hobby">
          <Hobby />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

      </div>
    </Router>
    )
  }

export default App;



{/* <Route> is the subtag of <Router> or <BrowserRouter>,
with <Route> we decide what content has to be rendered based on the path/URL.
--> “exact” attribute is used when we have multiple identical paths.*/}