import React, { Component } from 'react'

 class Message extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Uma',
            message: 'Thank you'
        }
    }

    subscribe(){
        this.setState({
            message: 'Thank you for subscribing'
        })
        
    }
  render() {
    return (
      <div className="container">
          <h1>{this.state.message},{this.state.name}</h1>
          <button className="btn btn-primary"
                  onClick={() => this.subscribe()}
          >Subscribe</button>
      </div>
    )
  }
}

export default Message