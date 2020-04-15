import React, { Component } from 'react';
import Widecard from '../components/Widecard';

// Create a whole component for the resume feature + add download's link

class Experience extends Component {
    render() {
      return (
        <div className="condiv">
          <h1 className="subtopic">You can ask them ;)</h1>
          <Widecard title="Front-End Developer" where=" SeLoger | Paris" from="September 2019" to="Present" during="Sandwich course in Master Degree"/>
          <Widecard title="Webdesigner | Knowledge Management Assistant" where="Société Générale | Paris" from="2018" to="2019" during="Sandwich course in Bachelor Degree"/>
          <Widecard title="Communication Assistant" where="EDF | Paris" from="2016" to="2018" during="Sandwich course in HND Degree"/>
          <button class="button-primary resume">
            <a href="" download><i className="fa fa-chevron-right"></i>Download my resume here</a>
            <div class="overlay">
              <div class="text"><i class="far fa-smile"></i><i class="far fa-smile"></i><i class="far fa-smile"></i></div>
            </div>
          </button>
        </div>
      )
    }
  }

  export default Experience