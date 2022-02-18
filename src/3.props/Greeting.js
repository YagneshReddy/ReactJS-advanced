import React from 'react'

function Greeting(props) {
    const {title, skill} = props
  return (
    <div>
        <h1> {title} is a {skill}</h1>
    </div>
  )
}

export default Greeting