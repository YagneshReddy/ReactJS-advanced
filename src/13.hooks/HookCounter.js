import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)

    const incrementCounter= () =>{
        setCount(count + 1)
    }
  return (
    <div className="container">
    <h1>Counter: {count}</h1>
    <button className="btn btn-primary" onClick={() =>incrementCounter()}>Increment Count</button>
</div>
  )
}

export default HookCounter