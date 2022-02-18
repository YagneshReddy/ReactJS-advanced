import React, { Component } from 'react'

 class UserGreetingThree extends Component {
     constructor() {
       super()
     
       this.state = {
          isLoggedIn: true
       }    
     }
  render() {
    return (
        this.state.isLoggedIn && <div><h1>Welcome Uma</h1></div>
    )
  }
}

export default UserGreetingThree