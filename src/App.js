import React, { Component } from 'react'
import UserCard from './components/UserCard'
import styled from 'styled-components'

import { O_AUTH_TOKEN } from './environment'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users', {
      method: 'GET',
      headers: {
        Authorization: O_AUTH_TOKEN,
      }
    })
      .then(res => res.json())
      .then(users => this.setState({users: users}))
      .catch(err => this.setState({users: []}))
  }

  render() {
    return (
      <Container>
        {
          this.state.users.map(user => <UserCard user={user} key={user.id}/>)
        }
      </Container>
    )
  }
}

export default App
