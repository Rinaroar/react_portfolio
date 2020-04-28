import React, { Component } from 'react'

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'titleDev' : ['Web Development'],
      'titleUX' : ['UX/UI'],
      'titleKH' : ['Strength'],
      'myskillsDev':['HTML/CSS','Accessibility','Javascript','React.js','PHP/SQL', "Node.js", "PWA"],
      'myskillsUX':['Illustrator', 'InDesign','Figma', "UX Method"],
      'myskillsKH':['Agility','Team work', "Proactive", 'Initiatives taker']
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">I could help you with...</h1>
        <section>
        <ul>
          <h2 class="skillTitle">{this.state.titleDev}</h2>
            {this.state.myskillsDev.map((value) => {
            return <li>{value}</li>
            })}
        </ul>
        <br></br>
        <ul>
          <h2 class="skillTitle">{this.state.titleUX}</h2>
            {this.state.myskillsUX.map((value) => {
            return <li>{value}</li>
            })}
        </ul>
        <br></br>
        <ul>
          <h2 class="skillTitle">{this.state.titleKH}</h2>
            {this.state.myskillsKH.map((value) => {
            return <li>{value}</li>
            })}
        </ul>
        </section>
      </div>
      )
    }
}

export default Skills


/* map() method is used to iterate over the items in an array and call a function on every element of the array. */


{skillsData.map(value =>
  value.skills !== null ? (
      <section key={value.title}>
        <h2>{value.title}</h2>
        <ul>
          {value.skills &&
            value.skills.map(data => (
              <li key={data.skillTheme}>
                {data.skillTheme}
              </li>
            ))}
        </ul>
      </section>
  ) : (
    <></>
  )
)}