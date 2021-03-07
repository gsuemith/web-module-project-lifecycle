import React, { Component } from 'react'

export class UserCard extends Component {
  constructor(props){
    super(props);
    this.user = props.user;
    this.state = {
      followers: [],
    }
  }

  componentDidMount() {
    fetch(`${this.user.followers_url}`,{
      method: 'GET',
      headers: {
        Authorization: "8bee285b7643fd92c7033edb72184b70283ab358"
      }
      
    })
      .then(res => res.json())
      .then(followers => this.setState({followers: followers}))
      .catch(err => console.log("Error:", err))
  }


  render() {
    return (
      <div>
        <img src={this.user.avatar_url} alt={this.user.login}/>
        <h1>{this.user.login}</h1>
        {
          this.state.followers.map(follower => {
            return <div>{follower.login}</div>
          })
        }
      </div>
    )
  }
}

export default UserCard
