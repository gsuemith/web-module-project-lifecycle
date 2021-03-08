import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 20em;
  background-color: white;
  margin: 2em;
  padding: 2em;

  img {
    width: 100%;
    border-radius: 50%;
  }
`

export class UserCard extends Component {
  constructor(props){
    super(props);
    this.user = props.user;
    this.state = {
      followers: [],
    }
  }

  componentDidMount() {
    fetch(`${this.user.followers_url}`)
      .then(res => res.json())
      .then(followers => this.setState({followers: followers}))
      .catch(err => console.log("Error:", err))
  }


  render() {
    return (
      <Card>
        <img src={this.user.avatar_url} alt={this.user.login}/>
        <h1>{this.user.login}</h1>
        {
          this.state.followers.map(follower => {
            return <div>{follower.login}</div>
          })
        }
      </Card>
    )
  }
}

export default UserCard
