import React from 'react'

function NameListOne() {
    const names =["Scott", "Adam", "Tuan"]
  return (
    <div className="container">
        {/* {
            names.map(function(name, index){
              return <h2>{name} {index}</h2>
            })
        } */}
        {/* {
            names.map((name, index) =><h2>{name} {index}</h2>)
        } */}
        {
            names.map((name, index) =>(
                <>
                    <h2>{name}</h2>
                    <h2>{index}</h2>
                </>
            ))
        }
    </div>
  )
}

export default NameListOne