// create your App component here
import React, { Component } from 'react'
import Person from './Person'

export class App extends Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({peopleInSpace: data.people})
    })
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((person, i) => <Person key={`${i}_${person.craft}_`.concat(person.name.split(" ").join(""))} person={person} />)}
      </div>
    )
  }
}

export default App