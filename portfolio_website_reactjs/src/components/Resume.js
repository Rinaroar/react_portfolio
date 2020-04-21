import React, { Component } from 'react'
import resume from '../img/front_end_dev.pdf';
import miniResume from '../img/mini-resume.png';



class Resume extends Component {

  onResumeClick() {
    window.open(resume);
  }

  render() {
    return (
      <div class="resume" onClick={this.onResumeClick}>
        <img src={miniResume} class="mini" alt="mini-resume"/><a href={resume} target="_blank" rel="noopener noreferrer"></a>
      </div>
    )
  }
}

export default Resume
