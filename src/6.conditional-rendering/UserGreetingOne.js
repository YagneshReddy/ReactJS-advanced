import React, { Component } from 'react'

 class UserGreetingOne extends Component {
     constructor() {
       super()
     
       this.state = {
          isLoggedIn: true
       }    
     }
  render() {
    let message
    if(this.state.isLoggedIn){
        message = <div><h1>Welcome Uma</h1></div>
    } else {
        message = <div><h1>Welcome Guest</h1></div>
    }
    return <React.Fragment>{message}</React.Fragment>
   // return <>{message}</>
  }
}

export default UserGreetingOne