import React from 'react'
import './styling.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary': ''
  return (
    <div>
      <h2 className={`${className} enlarge-text`}>Font will have styling applied</h2>
    </div>
  )
}

export default Stylesheet