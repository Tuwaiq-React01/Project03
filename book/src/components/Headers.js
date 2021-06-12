import React from 'react'
import {Link} from "react-router-dom";
export default function Headers() {

    const logout= () =>{
        localStorage.clear()
      }
    return (
        <div>
            <header>
                
                <i className="fas fa-book fa-2x"></i>
                <h1>الكتاب</h1>
               {/* {console.log('xss',!localStorage.getItem("token"))}
                {!localStorage.getItem("token") ? null
               : <Link to='/home'> Home </Link>}

                {!localStorage.getItem("token") ? null
               : <Link to='/Books'> Books </Link>}
               
               {!localStorage.getItem("token") ? null
               : <Link to='/logout' onClick={logout}> Logout </Link> } */}

                {!localStorage.getItem("token") ? null
               :<div style={{backgroundColor: "lightblue"}}> <Link to='/home'> Home </Link>
                <Link to='/Books'> Books </Link>
                <Link to='/logout' onClick={logout}> Logout </Link> </div>}

                </header>
                
        </div>
    )
}
