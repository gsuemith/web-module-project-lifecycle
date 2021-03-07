import React, { Component } from 'react'
import UserCard from './components/UserCard'

// const token = "8bee285b7643fd92c7033edb72184b70283ab358"

export class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users',{
      method: 'GET',
      headers: {
        Authorization: "8bee285b7643fd92c7033edb72184b70283ab358"
      }
      
    })
      .then(res => res.json())
      .then(users => this.setState({users: users}))
      .catch(err => this.setState({users: []}))
  }

  render() {
    return (
      <div>{console.log(this.state.users)}
        {
          this.state.users.map(user => <UserCard user={user} key={user.id}/>)
        }
      </div>
    )
  }
}

export default App
