import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
        <div className="nav-wrapper container">
        <a href="a" class="brand-logo">Movie List</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link as={Link} to="/Login">Login</Link></li>
        <li><Link as={Link} to="/">Movies</Link></li>
        <li><Link as={Link} to="/AboutUs">About Us</Link></li>
        </ul>
        </div>
        </nav>
    )
}

export default Nav;