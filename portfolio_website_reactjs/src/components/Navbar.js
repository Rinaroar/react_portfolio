import React, { Component } from 'react';
import Navitem from '../components/Navitem';

class Navbar extends Component {

    render() {
        return (
            <nav>
              <ul>
                <Navitem item="Home" tolink="/"></Navitem>
                <Navitem item="About" tolink="/about"></Navitem>
                <Navitem item="Experiences" tolink="/experiences"></Navitem>
                <Navitem item="Skills" tolink="/skills"></Navitem>
                <Navitem item="Hobby" tolink="/hobby"></Navitem>
                <Navitem item="Contact" tolink="/contact"></Navitem>
              </ul>
            </nav>
          )
        }
  }

export default Navbar