import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import AnimeList from './AnimeList';
import App from './App';

export default function HomePage() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

        return () => {};
    }, []);



    return (
     <div>
      <h1>Hi, Welcome  {name} {email}</h1>
      <Router>
       
     <div>
     <Link to="/AnimeList">AnimeList</Link>
     </div>

    <Route path="/AnimeList" component={AnimeList} />
    
      
      </Router>
    </div>
    )
}
