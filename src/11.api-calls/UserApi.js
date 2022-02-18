import React, { Component } from 'react'

export class UserApi extends Component {
    constructor(){
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount(){

        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(data => this.setState({ users: data}))
    }
  render() {
    return (
        <div className="container">
            <h2>User List from Node API</h2>
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
                        this.state.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.skill}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
  }
}

export default UserApi