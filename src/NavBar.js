
import {Link} from 'react-router-dom'
import './App.css';

export const NavBar = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <>
            <nav className="mr-auto wh">
                <Link className="homeStyle" style={navStyle} to="/">    
                    <h5> Home </h5>
                </Link>
                <ul className="nav-links wh">
                    <Link style={navStyle} to="/myList">
                        <li> My List </li>
                    </Link>
                    <Link style={navStyle} to="/Login">
                        <li> Login </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}
