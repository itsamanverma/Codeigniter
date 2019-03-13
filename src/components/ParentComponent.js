import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Sandhya'
      }
        this.greetParent = this.greetParent.bind(this)
            
    }

    // greetParent() {
    //     alert('Hello' + this.state.parentName)
    // }
    
    // using the ES6 features
    greetParent(childName) {
    	alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
        <div>
        {/* passing props as the methods */}
        <ChildComponent greetHandler ={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
