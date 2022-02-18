import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(){
        super()
        this.state = {

        }
        console.log('Constructor of A')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of A')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of A')
    }
  render() {
    console.log('Render of A')
    return (
      <div>
          <h1>LifeCycle Events</h1>
          <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA