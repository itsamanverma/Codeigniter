import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'sachin'
      }
        console.log('LifecyclinA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getderivedstatefromprops')
        return null
    }
        
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
    console.log('LifecycleA render')  
        return (
            <div>
                <div>Lifecycle B</div>
            <LifecycleB />      
           </div>
    )
  }
}

export default LifecycleA
