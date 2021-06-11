
import React from 'react';
import {Link} from 'react-router-dom';

const MyNavBar = () => {
    return (
        <nav style={{backgroundColor:"black"}}>
        <div className="nav-wrapper container">
        <a  class="brand-logo">University List</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            
        <li><Link as={Link} to="./login" ><i class="material-icons">account_circle </i></Link></li>
        
        <li><Link as={Link} to="/">Universities</Link></li>
        <li><Link as={Link} to="./about">About </Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default MyNavBar;