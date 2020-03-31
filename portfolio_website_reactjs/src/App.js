import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
    )
  }

export default App;



{/* <Route> is the subtag of <Router> or <BrowserRouter>,
with <Route> we decide what content has to be rendered based on the path/URL. */}