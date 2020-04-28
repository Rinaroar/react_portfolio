import React, { useState } from 'react';
import styled from 'styled-components';

import { MAX } from "../constants";

const Container = styled.div`
  padding: 100px ;
  background-color: #eee;
  flex: 6;

  ${MAX.MEDIA_M}{
    padding: 30% 50px 30px 50px;
  }
`

const Title = styled.h1`
  margin:10px 10px 30px 0px !important;
`

const List = styled.ul`
  margin: 0 90px 0 0;

  ${MAX.MEDIA_M}{
    margin: 0 60px 0 0;
  }
`

const SkillTitle = styled.h2`
  color: rgb(189, 1, 129);
`
const Cell = styled.li`
  list-style-type:none;
  margin: 10px 10px 10px 0;
  font-size: 1.2rem;
`

function SkillsView() {
  const [items] = useState([

    {
      title: "Web Development",
      skillTheme: ['HTML/CSS','Accessibility','Javascript','React.js','PHP/SQL', "Node.js", "PWA"]
    },
    {
      title: "UX/UI",
      skillTheme: ["Illustrator", "InDesign","Figma", "UX Method"]
    },
    {
      title: "Strengths",
      skillTheme: ["Agility","Team work", "Proactive", "Initiatives taker"]
    }
  ])

  return (
    <Container>
      <Title>I could help you with...</Title>
      <section>
        {items.map(value =>
          <List>
            <SkillTitle>{value.title}</SkillTitle>
              {value.skillTheme &&
              value.skillTheme.map(skill => (
                <Cell key={skill.skillTheme}>{skill}</Cell>
              ))}
          </List>
          )}
      </section>
    </Container>
  )
}

export default SkillsView;