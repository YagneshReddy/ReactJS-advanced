import React from 'react'
import Child from './Child'


function NameListFour() {
    const persons = [
        {
            id: 1,
            name: 'Scott',
            age:45,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Adam',
            age:44,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Tuan',
            age:42,
            skill: 'VueJS'
        },
        {
            id: 4,
            name: 'Uma',
            age:39,
            skill: 'Javascript'
        },
    ]

    return (
        <div className="container">
            <h2>User List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         persons.map(person =>(<Child key={person.id} person={person}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default NameListFour