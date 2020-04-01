import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilePic from '../img/pinkprofile.png';
import Social from '../components/Social';


class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilePic} className="profilePic" alt="My face"></img>
        <ReactTypingEffect className="typingEffect" text= {['I am Marina Luxin','I am a Web Developer']} speed={100} eraseDelay={700}/>
        <Social />
      </div>
    )
  }
}
export default Home