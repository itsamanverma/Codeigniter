import React, { Component } from 'react'

export default class DashBoard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          user: null,
          topic:login,
      }
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    
  render() {
    return (
      <div>
            <label>DashBoard</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="login">login</option>
                <option value="Register">Register</option>
                <option value="forgotpassword">forgotpassword</option>
            </select>
      </div>
    )
  }
}

export default DashBoard
