import React from 'react'

function Child(props) {
    const {id, name, age, skill} = props.person
  return (
    <React.Fragment>           
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{skill}</td>
        </tr>
    </React.Fragment>
  )
}

export default Child