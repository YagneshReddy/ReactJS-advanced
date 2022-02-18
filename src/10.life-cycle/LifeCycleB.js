import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(){
        super()
        this.state = {

        }
        console.log('Constructor of B')
    }

    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps of B')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount of B')
    }
  render() {
    console.log('Render of B')
    return (
      <div></div>
    )
  }
}

export default LifeCycleB