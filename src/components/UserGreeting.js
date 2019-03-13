import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          isLoggedIn: false         
      }
    }
    
    //3Approach
    render() {
   
       return this.state.isLoggedIn && <div>Welcome sachine</div>
        // return (
        //     this.state.isLoggedIn ?
        //         (<div>Welcome sachine</div>):
        //         (<div>Welcome Guest </div>)
        // )
   
        //variable render 2approach
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome sachine</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if (this.state.isLoggedIn) {
        //     return (<div>Welcome sachine</div>)
        // } else {
        //     return (<div>Welcome Guest</div>)
        // }
    // return (
    //   <div>
    //         <div>Welcome sachine</div>
    //         <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
