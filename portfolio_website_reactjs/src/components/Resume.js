import React from 'react';
import styled from 'styled-components';
import { MAX } from "../constants";

import resume from '../img/front_end_dev.pdf';
import miniResume from '../img/mini-resume.png';

const Mini = styled.img`
  width: 10%;
  position: absolute;
  left: 85%;
  bottom: 3%;
  cursor: pointer;
  display: block;

  ${MAX.MEDIA_M} {
    width: 20%;
    left: 75%;
    bottom: 7%;
  }

  ${MAX.MEDIA_XS} {
    width: 40%;
    left: 0;
    position: relative;
  }
`


const Resume = () => {

  function onResumeClick() {
    window.open(resume);
  }

  return (
    <div onClick={onResumeClick}>
      <Mini src={miniResume} alt="mini-resume"/>
      <a href={resume} target="_blank" rel="noopener noreferrer"></a>
    </div>
  )
}

export default Resume
