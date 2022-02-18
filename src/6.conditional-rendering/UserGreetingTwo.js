import React, { Component } from 'react'

 class UserGreetingTwo extends Component {
     constructor() {
       super()
     
       this.state = {
          isLoggedIn: false
       }    
     }
  render() {
    return (
        this.state.isLoggedIn ? <div><h1>Welcome Uma</h1></div>
                              : <div><h1>Welcome Guest</h1></div>
    )
  }
}

export default UserGreetingTwo