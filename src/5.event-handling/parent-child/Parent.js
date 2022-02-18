import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    constructor(){
        super()

        this.state = {
            name: 'Parent'
        }

        this.callParent = this.callParent.bind(this)
    }

    callParent(childName){
        alert(`Calling ${this.state.name} from ${childName} `)
    }
    
  render() {
    return (
      <div className="container">
          <h1>Call Parent from Child</h1>
        <Child callParent={this.callParent} />
      </div>
    )
  }
}

export default Parent