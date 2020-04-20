import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {

    render() {
        return (
            <nav>
              <ul>
                <Navitem item="Home" tolink="/react_portfolio"></Navitem>
                <Navitem item="About" tolink="/about"></Navitem>
                <Navitem item="Experiences" tolink="/experiences"></Navitem>
                <Navitem item="Skills" tolink="/skills"></Navitem>
                <Navitem item="Projects" tolink="/projects"></Navitem>
                <Navitem item="Hobby" tolink="/hobby"></Navitem>
                <Navitem item="Contact" tolink="/contact"></Navitem>
              </ul>
            </nav>
          )
        }
  }

export default Navbar