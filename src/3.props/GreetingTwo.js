import React, { Component } from 'react'

 class GreetingTwo extends Component {

  render() {
    console.log(this.props)
    const {title, skill, count, isAdmin, sample, children} = this.props
    return (
      <div>
          <h1> {title} is a {skill}</h1>
          <h2>Count: {count}</h2>
          <h2>IsAdmin : {isAdmin? "True": "False"}</h2>
          <h2>Message: {sample()}</h2>
          <div>
            {children}
          </div>
      </div>
    )
  }
}

export default GreetingTwo