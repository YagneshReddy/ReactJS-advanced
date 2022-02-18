import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(){
         super()

         this.state = {
             message: 'Hello'
         }

         //3rd approach
         //this.changeMessage = this.changeMessage.bind(this)
     }

    //  changeMessage(){
    //      console.log(this)
    //      // As react runs in strict mode, under strict mode `this`
    //      // inside the function will become undefined
    //     this.setState({
    //         message: 'Thank you'
    //     })
    //  }

    // 4th Approach
     changeMessage = () =>{
        console.log(this)
        // As react runs in strict mode, under strict mode `this`
        // inside the function will become undefined
       this.setState({
           message: 'Thank you'
       })
    }
  render() {
    return (
      <div className="container">
          <h1>{this.state.message}</h1>
          {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button> */}

           {/* When in need of passing parameteres */}
            {/* 1st Approach */}
            {/* <button className="btn btn-primary" onClick={this.changeMessage.bind(this)}>Click Me</button> */}

            {/* When in need of passing parameteres */}
            {/* 2nd Approach */} - 
            {/* <button className="btn btn-primary" onClick={()=>{
                console.log(this)
                this.changeMessage()
             }}     
            >Click Me</button>      */}

            {/* 3rd Approach */}
            {/* <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button> */}

            {/* 4th Approach */}
            <button className="btn btn-primary" onClick={this.changeMessage}>Click Me</button>
            
      </div>
    )
  }
}

export default EventBind