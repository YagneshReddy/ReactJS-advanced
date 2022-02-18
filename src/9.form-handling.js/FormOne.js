import React, { Component } from 'react'

export class FormOne extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: 'Scott',
            comments: '',
            country: '',
            gender: '',
            isAdmin: false
        }

       // this.state.username ='Desatnick'

        console.log(props)

       // this.setState({username: 'Scott'})
    }

    getData() {
      console.log(this.state.username) 
      console.log(this.state.comments)
      console.log(this.state.country)
      console.log(this.state.gender)
      console.log(this.state.isAdmin)
    }

    resetForm(){
        this.setState({
            username: '',
            comments: '',
            country: '',
            gender: ''
        })
    }

  render() {
      console.log(this.props)
      const countryList = [
          {id: 1, name: 'Bharat'},
          {id: 2, name: 'Japan'},
          {id: 3, name: 'Australia'},
      ]
    return (
      <div className="container">
          <h1>User Form</h1>
          <div>
              <label>Username</label>
              <input type="text" 
                     className="form-control w-50"
                     value={this.state.username}
                     onChange={(event) => this.setState({username : event.target.value})}
              />
          </div>
          <br />
          <div>
              <label>Comments</label>
              <textarea className="form-control w-50"
                        value={this.state.comments}
                        onChange={(event) => this.setState({comments : event.target.value})}
              >    
              </textarea>
          </div>  
          <br />
          <div>
              <label>Country</label>
              <select className="form-select w-50"
                      value={this.state.country}
                      onChange={(event) => this.setState({country : event.target.value})}>
                  <option value="">Select</option>
                  {
                    countryList.map(country =>(<option key={country.id} value={country.id}>{country.name}</option>))
                  }
              </select>
          </div>  
          <br />
          <div>
              <label>Gender</label>&nbsp;&nbsp;&nbsp;
              <input type="radio" 
                     className="form-check-input"
                     value={0}
                     onChange={(event) => this.setState({gender : event.target.value})}
                     name="gender"
              /> Male&nbsp;&nbsp;
              <input type="radio" 
                     className="form-check-input"
                     value={1}
                     onChange={(event) => this.setState({gender : event.target.value})}
                     name="gender"
              /> Female&nbsp;&nbsp;
          </div>                 
          <br />
          <div>
              <label>IsAdmin</label>&nbsp;&nbsp;
              <input type="checkbox" 
                     className="form-check-input"
                     value={this.state.isAdmin}
                     onChange={(event) => this.setState({isAdmin : !this.state.isAdmin})}
              />
          </div>
          <br />
          <div>
              <button className="btn btn-primary" onClick={() => this.getData()}>Submit</button> &nbsp;&nbsp;
              <button className="btn btn-warning" onClick={() => this.resetForm()}>Reset</button>
          </div>
      </div>
    )
  }
}

export default FormOne