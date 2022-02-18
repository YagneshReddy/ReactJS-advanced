import React, {useEffect, useState} from 'react'

function HookApi() {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3001/api/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
  return (
    <div>
    <div className="container">
          <h1>User list fetched using Hooks</h1>
          <table className="table">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>City</th>
                  </tr>
              </thead>
              <tbody>
                {
                    users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))
                }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default HookApi