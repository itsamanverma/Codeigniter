import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      username: '',
      comments: '',
      topic:''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
       username:event.target.value
     })
  }

  handleCommentsChange = (event) => {
    this.setState({
       comments:event.target.value
     })
  }
  
  render() {
    return (
      <form>
            <div>
                <label>Username</label>
                <input type='text' value ={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value ={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="react-native"> React-native </option>
          </select>
        </div>
      </form>
    )
  }
}

export default Form
