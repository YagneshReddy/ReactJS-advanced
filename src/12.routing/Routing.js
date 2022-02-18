import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Welcome from '../1.components/class/Welcome'
import UserMongoAPI from '../11.api-calls/UserMongoAPI'
import NameListFour from '../7.list-rendering/NameListFour'
import FormOne from '../9.form-handling.js/FormOne'
import { Contact } from './Contact'
import { Error } from './Error'



function Routing() {
  return (
    <Router>
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">India Mart</Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link  to="/home" className="nav-item nav-link active">Home</Link>
                        <Link  to="/users" className="nav-item nav-link">Users</Link>
                        <Link  to="/about" className="nav-item nav-link">About</Link>
                        <Link  to="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>

        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<NameListFour />} />
            <Route path="/users" element={<UserMongoAPI />} />
            <Route path="/about" element={<FormOne />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>

  )
}

export default Routing