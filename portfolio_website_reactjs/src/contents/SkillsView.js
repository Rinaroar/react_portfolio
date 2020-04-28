import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px ;
  background-color: #eee;
  flex: 6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function SkillsView() {
  const [items, setItem] = useState([

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
    <Container className="skills">
      <h1 className="subtopic">I could help you with...</h1>


      <section>
      {items.map(value =>
        <ul>
        <h2>{value.title}</h2>
        {value.skillTheme &&
        value.skillTheme.map(skill => (
            <li key={skill.skillTheme}>{skill}</li>
          ))}
        </ul>
        )}
      </section>


    </Container>
  )
}

export default SkillsView;