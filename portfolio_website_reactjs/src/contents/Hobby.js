import React, { Component } from 'react';

import yoga from '../img/exercise.png';

class Contact extends Component {
  render() {
    return (
      <div className="condiv home hobby">
        <h1 className="subtopic">What do I do after work ?</h1>
        <img src={yoga} className="yoga"  alt="Yoga pose"></img>
        <p class="hobby"> Follow me on my dedicated <a href="https://www.instagram.com/rinadoyoga/?hl=fr" target="_blank" rel="noopener noreferrer" class="instagram">Instagram Account!</a></p>
      </div>
    )
  }
}

export default Contact