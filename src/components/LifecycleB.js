import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'sachin'
      }
        console.log('LifecyclinB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getderivedstatefromprops')
        return null
    }
        
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    render() {
    console.log('LifecycleB render')  
    return (<div>Lifecycle A</div>)
  }
}

export default LifecycleB
