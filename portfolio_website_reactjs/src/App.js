import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Experience from './contents/Experience';
import Skills from './contents/Skills';
import Contact from './contents/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/experiences">
          <Experience />
        </Route>

        <Route exact path="/skills">
          <Skills />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

      </div>
    </Router>
    )
  }

export default App;



{/* <Route> is the subtag of <Router> or <BrowserRouter>,
with <Route> we decide what content has to be rendered based on the path/URL.
--> “exact” attribute is used when we have multiple identical paths.*/}