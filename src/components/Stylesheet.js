import React from 'react'
import './myStyles.css';

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
      <div style={{
          display: "flex",
          justifyContent:"center"
    }}>
      <h1 className ={`${className} font-xl` }>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
