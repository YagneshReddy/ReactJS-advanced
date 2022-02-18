import React, { Component } from 'react'
//const heading = {fontSize: '72px',color: 'blue'}

export class InlineClass extends Component {
  render() {
    const heading = {fontSize: '72px',color: 'crimson'}
    return (
        <div>
            {/* <h2 style="color:blue; font-size:72px">This is header</h2> */}
            <h1 style={heading}>Applied Inline Styling</h1>
            <h1 style={{fontSize : '72px', color: 'gray'}}>This is another header</h1>
        </div>
    )
  }
}

export default InlineClass