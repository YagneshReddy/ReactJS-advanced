import React, { Component } from 'react'

 class ClassClick extends Component {

    clickHandler(){
        console.log('Button is clicked - Class')
    }
  render() {
    return (
        <div className="container">
        <button className="btn btn-primary"
                onClick={this.clickHandler}
        >Click</button>
    </div>
    )
  }
}

export default ClassClick