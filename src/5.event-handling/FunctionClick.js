import React from 'react'

function FunctionClick() {

    function clickHandler(value1){
        console.log(`Button is Clicked - Function - ${value1}`)
    }

  return (
    <div className="container">
        <h1>Event Handling of function</h1>
        <button className="btn btn-primary"
                onClick={() =>clickHandler('Passed param')}
        >Click</button>
    </div>
  )
}

export default FunctionClick