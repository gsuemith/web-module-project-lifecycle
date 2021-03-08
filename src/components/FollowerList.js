import React, { Component } from 'react'
import styled from 'styled-components'

const Toggle = styled.p`
  font-size: small;
  color: gray;
  cursor: pointer;
  padding-left: 1em;
`

export class FollowerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      expand: false,
    }
  }

  toggle = e => {
    this.setState({expand: !this.state.expand})
  }

  render() {
    return (
      <div onClick={this.toggle}>
        <h3 onClick={this.toggle} style={{cursor: 'pointer'}}>Followers</h3>
        {
          this.state.expand &&
          this.props.followers.map(follower => {
            return <div key={follower.id}>{follower.login}</div>
          })
        }
        <Toggle onClick={this.toggle}>
          {this.state.expand ? 'hide followers' : 'view followers'}
        </Toggle>
      </div>
    )
  }
}

export default FollowerList
