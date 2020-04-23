import React from 'react';

const SkillView = ({skillsData}) => (

  <div className="condiv skills">
    <h1 className="subtopic">I could help you with...</h1>
    <section>

      <ul>
        {skillsData.skills.map(value => (
        <h2 class="skillTitle" key={value.title}>{value.title}</h2>
        ))}

        <li></li>
      </ul>

      <br></br>

      <ul>
        <h2 class="skillTitle"></h2>
        <li></li>
      </ul>

      <br></br>

      <ul>
        <h2 class="skillTitle"></h2>
        <li></li>
      </ul>

    </section>
  </div>
)

export default SkillView