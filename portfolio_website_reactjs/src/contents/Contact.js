import React from 'react';
import styled from 'styled-components';
import Social from '../components/Social';

import gif from '../img/seeya.gif';
import { MAX } from "../constants";

const Container = styled.div`
  padding: 100px ;
  background-color: #eee;
  flex: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${MAX.MEDIA_M}{
    padding: 0px 50px 90px 50px;
  }
`

const Title = styled.h1`
  margin:10px 10px 30px 0px !important;
`

const Mail = styled.a`
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    color: rgb(189, 1, 129);

  &:hover {
    color:#680270;
  }
`

const Gif = styled.img`
  margin-top: 60px;
  max-width: 100%;

  ${MAX.MEDIA_M}{
    margin-bottom: 130px;
  }
`

const Contact = () => {
    return (
      <Container>
        <Title>Will you dare?</Title>
        <Mail href="mailto:marina.luxin@gmail.com">marina.luxin@gmail.com</Mail>
        <Gif src={gif} alt="Sponge Bob saying see you!"></Gif>
        <Social />
      </Container>
    )
}

export default Contact