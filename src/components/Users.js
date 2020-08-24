import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  generateUsers = () =>
  {
    const { users } = this.props
    return users.map((usr) => <li>{usr.username} - {usr.hometown}</li> )
  }
  generateCount = () =>
  {
    const count = this.props.userCount
    return count ? `Users: ${this.props.userCount}` : null
  }

  render() {
    return (
      <div>
        <ul>
          {this.generateUsers()}
          {this.generateCount()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state =>
{
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
