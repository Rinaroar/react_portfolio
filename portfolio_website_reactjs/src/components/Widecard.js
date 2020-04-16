import React, { Component } from 'react'

class Widecard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="widecardContent">
          <h2 class="xpTitle">{this.props.title}</h2>
          <p class="fromTo">{this.props.from} - {this.props.to}</p>
          <p class="where">{this.props.where}</p>
          <p class="during">{this.props.during}</p>
        </div>
      </div>
    )
  }
}


export default Widecard