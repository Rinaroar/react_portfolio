import React, { Component } from 'react';
import Social from '../components/Social';

import gif from '../img/seeya.gif';

class Contact extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1 className="subtopic">Contact Me</h1>
        <h3>marina.luxin@gmail.com</h3>
        <img src={gif} className="gif"></img>
        <Social />
      </div>
    )
  }
}

export default Contact