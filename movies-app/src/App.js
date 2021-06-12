import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListMovie from "./compounts/ListMovie";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Navbar , Nav } from 'react-bootstrap';
import Contact from './compounts/Contact';
import Home from './compounts/Home';

export default function App() {

   const [data, setData] = useState([])

   useEffect(() => {
        return () => {
            callApi();
        };
      });

    function callApi() {
        axios({
          method: "get",
          url: 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'
        }).then((response) => {
          console.log("this response ", response.data.Search);
          setData(response.data.Search)
          console.log(setData(response.data.Search) );
        }
        ).catch((error) => {
          console.log("error", error)
        })
    }

    const AllMovies = data.map((item, key) => (
        <ListMovie item={item} key={key} />
      ));

  return (
    <Router>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
    <Nav.Link><Link to="/movies">Movies</Link></Nav.Link>
    <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
      
      </Nav>
    </Navbar>
  <div>
    <Route path="/home" component={Home}/>
    <Route path="/movies" >
    <Container className="Container">
            <Row>
            {AllMovies}
            </Row>
        </Container >
    </Route>
    <Route path="/Contact" component={Contact} />
  </div>
  </Router>
  )
}