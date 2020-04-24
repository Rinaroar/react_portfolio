import React from 'react';
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

const SkillView = ({skillsData}) => (
   <Container className="skills">
      <h1 className="subtopic">I could help you with...</h1>

        <ul>

        {skillsData.skills.map(value => (
          <h2 className="skillTitle" key={value.title}>
            {value.title}
          </h2>
           ))};

          <li></li>


        </ul>


    </Container>
);

export default SkillView;