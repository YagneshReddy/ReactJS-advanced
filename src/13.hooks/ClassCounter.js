import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    incrementCounter(){
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    return (
      <div className="container">
          <h1>Counter: {this.state.count}</h1>
          <button className="btn btn-primary"
                  onClick={() => this.incrementCounter()}
          >Increment Count</button>
      </div>
    )
  }
}

export default ClassCounter