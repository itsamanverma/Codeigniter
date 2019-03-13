import React from 'react'

function ChildComponent(props) {
  return (
    <div>
          {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
          <button onClick={() => props.greetHandler('how are You!')}>Greet Parent</button>

    </div>
  )
}

export default ChildComponent