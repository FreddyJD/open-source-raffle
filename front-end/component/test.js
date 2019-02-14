import React, { Component } from 'react'

export default class test extends Component {
  render() {
    return (
      <div>
        {this.props.data.email}
      </div>
    )
  }
}