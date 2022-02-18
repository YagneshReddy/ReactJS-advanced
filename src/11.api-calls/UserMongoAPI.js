import React, { Component } from 'react'

export class UserMongoAPI extends Component {
    constructor(){
        super()

        this.state = {
            users: [],
            _id: '',
            name: '',
            email: '',
            city: ''
        }
    }

    componentDidMount(){
        this.getUsers()
    }

    getUsers(){
        fetch("http://localhost:3001/api/users")
        .then(response => response.json())
        .then(data => this.setState({users: data}))
    }

    resetForm(){
        this.setState({
            _id: '',
            name: '',
            email: '',
            city: ''
        })
    }

    createUser(){
        const postRequest = {
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }
        
        fetch("http://localhost:3001/api/users", postRequest)
        .then(response => response.json())
        .then(data => {
            this.getUsers()
            this.resetForm()
        })
    }

    // editUser(userId){
    //     fetch(`http://localhost:3001/api/users/${userId}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             name: data[0].name,
    //             email: data[0].email,
    //             city: data[0].city
    //         })
    //     })
    // }

    updateUser(){
      console.log(this.state._id)
      if(this.state._id !== "") {
        const putRequest = {
          headers: {'Content-Type': 'application/json'},
          method: "PUT",
          body: JSON.stringify({
              name: this.state.name,
              email: this.state.email,
              city: this.state.city
          })
      }
      
      fetch(`http://localhost:3001/api/users/${this.state._id}`, putRequest)
      .then(response => response.json())
      .then(data => {
          this.getUsers()
          this.resetForm()
      }) 

      }
    }

    editUser(user){
      console.log(user)
        let {_id,name, email, city} = user
        this.setState({ _id, name,email,city})
    }

    deleteUser(userId){
        const deleteRequest = {
            headers: {'Content-Type': 'application/json'},
            method: "DELETE"
        }
        
        fetch(`http://localhost:3001/api/users/${userId}`, deleteRequest)
        .then(response => response.json())
        .then(data => {
            this.getUsers()
        }) 
    }

  render() {
    return (
      <div className="container">
          <h1>User list fetched from SQL Server</h1>
          <table className="table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Actions</th>
                  </tr>
                  <tr>
                      <th>
                          <input type="text" 
                                 value={this.state.name}
                                 onChange ={(event) =>this.setState({name: event.target.value}) }
                          />
                      </th>
                      <th>
                          <input type="text" 
                                 value={this.state.email}
                                 onChange ={(event) =>this.setState({email: event.target.value}) } 
                          />
                      </th>
                      <th>
                          <input type="text" 
                                 value={this.state.city}
                                 onChange ={(event) =>this.setState({city: event.target.value}) }
                        />
                      </th>
                      <th>
                          <button className="btn btn-primary"
                                  onClick={() => this.createUser()}
                          >Add</button> &nbsp;&nbsp;
                          <button className="btn btn-warning"
                                  onClick={() => this.updateUser()}
                          >Update</button>
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                    this.state.users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                            <td>
                                <button className="btn btn-warning"
                                        onClick={() => this.editUser(user)}
                                >Edit</button>&nbsp;&nbsp;
                                <button className="btn btn-danger"
                                         onClick={() => this.deleteUser(user._id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))
                }
              </tbody>
          </table>
      </div>
    )
  }
}

export default UserMongoAPI