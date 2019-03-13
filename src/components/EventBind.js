import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          message: "Hello"
      }
        // binding in the class Constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye!"
    //     })
    //     console.log(this)
    // }
    
    // class property as a arrow function
    clickHandler = () => {
        this.setState({
         message:"Goodbye!"
     })
    }
    
  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/* binding in render */}
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* arrow function in render */}
            {/* <button onClick={() => this.clickHandler()}>Click</button> */}
            <button onClick={this.clickHandler}>Click</button>



      </div>
    )
  }
}

export default EventBind
