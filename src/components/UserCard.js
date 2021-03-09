import React, { Component } from 'react'
import FollowerList from './FollowerList'
import styled from 'styled-components'

const Card = styled.div`
  width: 20em;
  background-color: white;
  margin: 2em;
  padding: 2em;
  box-shadow: 4px 4px 2px black;
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`
const Name = styled.h1`
  text-align: center;
`

export class UserCard extends Component {
  constructor(props){
    super(props);
    this.user = props.user;
    this.state = {
      followers: [],
    }
  }


  //lifecycle method
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
        <Name>{this.user.login}</Name>
        <FollowerList followers={this.state.followers} />
      </Card>
    )
  }
}

export default UserCard
