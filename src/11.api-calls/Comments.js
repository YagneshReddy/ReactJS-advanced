import React, { Component } from 'react'

export class Comments extends Component {
    constructor(){
        super()

        this.state = {
            albums: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(data => this.setState({albums: data}))
    }

  render() {
    return (
      <div>
          {
              this.state.albums.map(album => (
                    <ul key={album.id}>
                        <li>{album.name}</li>
                        <li>{album.email}</li>
                        <li>{album.body}</li>
                    </ul>
              ))
          }
      </div>
    )
  }
}

export default Comments