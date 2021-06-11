import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';

export default function NavB() {
  const logOut = () => {
    localStorage.clear();
  };

  return (
    <nav>
      <Link to="/"><img class='m-4 col-6 rounded' width='300px' heigth='100px'src={logo}/></Link>
      <Link class="btn btn-light m-2 p-3 d-inline col-2" to="/">Home</Link>
      <Link class="btn btn-light m-2 p-3 d-inline col-2"to="/contact">Contact</Link>
      <Link class="btn btn-light m-2 p-3 d-inline col-2" onClick={logOut} to="/logout">
        logout
      </Link>
    </nav>
  );
}
