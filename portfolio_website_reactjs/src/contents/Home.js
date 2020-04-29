import React from 'react';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';

import  profilePic from '../img/pinkprofile.png';
import Social from '../components/Social';
import { MAX } from "../constants";

const Container = styled.div`
  padding: 100px;
  background-color: #eee;
  flex: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${MAX.MEDIA_XS} {
    padding: 0;;
  }
`
const Profile = styled.img`
  border-radius: 50%;
  width: 350px;
  margin-bottom: 30px;

  ${MAX.MEDIA_M}{
      margin-bottom: 45px;
  }

  ${MAX.MEDIA_S} {
    margin-bottom: 35px;
  }
`

const Home = () => {
    return (
      <Container>
        <Profile src={profilePic} alt="My face"></Profile>
        <ReactTypingEffect className="typingEffect" text= {['I am Marina Luxin','I am a Web Developer']} speed={100} eraseDelay={700}/>
        <Social />
      </Container>
    )
}
export default Home