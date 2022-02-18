import React, { Component } from 'react'

export class Todo extends Component {
    constructor() {
      super()
    
      this.state = {
         todos: []
      }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => this.setState({todos: data}))
    }
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
          {
            this.state.todos.map(todo => (
              <ul key={todo.id}>
                  <li>{todo.id}</li>
                  <li>{todo.userId}</li>
                  <li>{todo.title}</li>
                  <li>{todo.completed ? "true" : "false"}</li>
              </ul>
            ))
          }
      </div>
    )
  }
}

export default Todo