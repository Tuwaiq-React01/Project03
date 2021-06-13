import React from 'react'
import {Link}from 'react-router-dom'


export default function NavBar() {
    
    const logout = () => {
        localStorage.clear();
    };
   
        
        return (
            <div>
                 <nav>
                    <Link to="../">Home</Link>
                    <Link to="Components/Food2">Resturan A</Link>
                    <Link to="Components/Food3">Resturan B</Link>
                    <Link to="../App/logout" onClick={logout} to="/logout">Logout</Link>
                </nav>
            </div>
        )
    
}
