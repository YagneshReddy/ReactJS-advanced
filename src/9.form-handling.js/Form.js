import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            comments: '',
            country: '',
            gender: '',
            isAdmin: false
        }
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

    getUsername(event){
        this.setState({
            username : event.target.value
        })
    }
    getComments(event){
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        this.setState({
            comments : event.target.value
        })
    }

    getCountry(event){
        this.setState({
            country : event.target.value
        })
    }
    getGender(event){
        console.log('Gender event is fired')
        console.log(event.target)
        this.setState({
            gender : event.target.value
        }, () =>{
            console.log(`Selected Value : ${event.target.value} `)
            console.log(event.target.value==1? 'Female' : 'Male')
        })
    }

    getIsAdmin(event){
        console.log('onchange of checkbox fired')
        
        this.setState({
            isAdmin : !this.state.isAdmin
        }, () =>console.log(this.state.isAdmin))
    }
  render() {
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
                     onChange={(event) => this.getUsername(event)}
              />
          </div>
          <br />
          <div>
              <label>Comments</label>
              <textarea className="form-control w-50"
                        value={this.state.comments}
                        onChange={(event) => this.getComments(event)}
              >    
              </textarea>
          </div>  
          <br />
          <div>
              <label>Country</label>
              <select className="form-select w-50"
                      value={this.state.country}
                      onChange={(event) => this.getCountry(event)}
              >
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

                     onChange={(event) => this.getGender(event)}
                     name="gender"
              /> Male&nbsp;&nbsp;
              <input type="radio" 
                     className="form-check-input"
                     value={1}

                     onChange={(event) => this.getGender(event)}
                     name="gender"
              /> Female&nbsp;&nbsp;
          </div>                 
          <br />
          <div>
              <label>IsAdmin</label>&nbsp;&nbsp;
              <input type="checkbox" 
                     className="form-check-input"
                     value={this.state.isAdmin}
                     onChange={(event) => this.getIsAdmin(event)}
              />
          </div>
          <br />
          <div>
              <button className="btn btn-primary"
                      onClick={() => this.getData()}
              >Submit</button> &nbsp;&nbsp;
              <button className="btn btn-warning"
                     onClick={() => this.resetForm()}
              >Reset</button>
          </div>
      </div>
    )
  }
}

export default Form