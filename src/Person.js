import React, { Component } from 'react'

export class Person extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.person.name} is in {this.props.person.craft}.</h1>
      </div>
    )
  }
}

export default Person
