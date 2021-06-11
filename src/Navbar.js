import React from 'react';
import App from './App';
import Contact from './Contact';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  
export default function Navbar() {

    return (
        <div>            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Tuwaiq Random Picker</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="#"><Link to="/">Home</Link></a>
                        <a class="nav-item nav-link" href="#"><Link to="/contact">Contact</Link></a>
                        {/* <a class="nav-item nav-link" href="#"><Link onClick={logout} to="/logout">Logout</Link></a> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
