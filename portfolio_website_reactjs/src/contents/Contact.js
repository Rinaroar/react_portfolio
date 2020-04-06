import React, { Component } from 'react';
import Social from '../components/Social';

import gif from '../img/seeya.gif';

class Contact extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1 className="subtopic">Will you dare?</h1>
        <a href="mailto:marina.luxin@gmail.com" class="mail">marina.luxin@gmail.com</a>
        <img src={gif} className="gif" alt="Sponge Bob saying see you!"></img>
        <Social />
      </div>
    )
  }
}

export default Contact