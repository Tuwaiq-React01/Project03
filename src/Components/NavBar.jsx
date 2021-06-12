import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<NavLink className='navbar-brand' to='/'>
					Movies
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
