import React, { Component } from 'react'

const ProjectData = [
  {
    "category": "FRONT-END",
    "title": "Your Moveez",
    "text": "PWA, find and add a movie to your favorites",
    "image": "https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2589&q=80"
    /* "link": */
  },
  {
    "category": "FRONT-END",
    "title": "Weather App",
    "text": "Check the weather wherever you are (in progress)",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "BACK-END",
    "title": "Movie DB CRUD",
    "text": "Using PDO to CRUD a movie Database",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "FULLSTACK",
    "title": "Yoga App",
    "text": "Daily Yoga PWA for training (in progress)",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },

]

class Card extends Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: ProjectData
    });
  }

  render() {
    return <div className="app-card-list">
        {
          Object
          .keys(this.state.posts)
          .map(key => <CardContent key={key} index={key} details={this.state.posts[key]}/>)
        }
    </div>
  }
}


class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = {
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>
        <p className="body-content">{this.props.text}</p>
        <Button />
      </div>
    )
  }
}


class CardContent extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.details.category} image={this.props.details.image}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}

export default Card
