import React, { Component } from 'react'

class Widecard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="widecardContent">
          <h3>{this.props.title}</h3>
          <h4 class="where">{this.props.where}</h4>
          <h4 class="fromTo">{this.props.from} - {this.props.to}</h4>
          <h4 class="during>">{this.props.during}</h4>
        </div>
      </div>
    )
  }
}

export default Widecard