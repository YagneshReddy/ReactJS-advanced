import React from 'react'

function NameListTwo() {
    const names =["Scott", "Adam", "Tuan", "Adam"]
    const nameList = names.map((name, index)=><h2 key={index}>{name}</h2>)
    console.log(nameList)
    return nameList
}

export default NameListTwo