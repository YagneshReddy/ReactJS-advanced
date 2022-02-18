import React from 'react'

function Child(props) {
  console.log(props)
  return (
    <div className="container">
      <button className="btn btn-primary"
              onClick={()=> props.callParent('Child')}
      >Call Parent</button>
    </div>
  )
}

export default Child