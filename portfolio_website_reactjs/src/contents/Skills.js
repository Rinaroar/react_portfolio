import React, { Component } from 'react'

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'titleDev' : ['Web Development'],
      'titleUX' : ['UX/UI'],
      'myskillsDev':[,'HTML','CSS','Javascript','PHP','React'],
      'myskillsUX':['Illustrator','Figma', "UX Method"]
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          <h3>{this.state.titleDev}</h3>
            {this.state.myskillsDev.map((value) => {
            return <li>{value}</li>
            })}
        </ul>
        <br></br>
        <ul>
          <h3>{this.state.titleUX}</h3>
            {this.state.myskillsUX.map((value) => {
            return <li>{value}</li>
            })}
        </ul>
      </div>
      )
    }
}

export default Skills


/* map() method is used to iterate over the items in an array and call a function on every element of the array. */