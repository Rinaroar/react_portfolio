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
       <img src={miniResume} className="mini" alt="mini-resume" /><a href={resume} target="_blank" rel="noopener noreferrer"></a>
        <div class="overlay">
          <div class="text"><i class="far fa-smile"></i><i class="far fa-smile"></i><i class="far fa-smile"></i></div>
        </div>
      </div>
    )
  }
}


export default Resume

  {/* <button class="button-primary resume" onClick={this.onResumeClick}> */}
       {/*  <a href={resume} target="_blank" rel="noopener noreferrer" ><i className="fa fa-chevron-right"></i>Check at my resume!</a> */}