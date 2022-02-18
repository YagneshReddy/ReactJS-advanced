import React, { Component } from 'react'
import axios from 'axios'

export class User extends Component {
    constructor() {
      super()
    
      this.state = {
         users: []
      }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({users: data}))

        // axios("https://jsonplaceholder.typicode.com/users")
        // .then(response => this.setState({users: response.data}))
    }
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Latitude</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                            <td>{user.address.geo.lat}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default User