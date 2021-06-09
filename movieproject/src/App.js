import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './Home';
import Login from './Login';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  //hooks
  const [movies, setMovies] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    alert(`Here are the movies for ${searchInput}`)
  }, [movies]) //RERENDER 

  //function and var
  const apiKey = "e1956ce6b40aad03cfba8c496b403bdf"

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInput}`)
      .then(res => {
        setMovies([...res.data.results])
      })
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value)
  }

  return (
    <div className="row">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/" >
            <Home movies={movies} handleSubmit={handleSubmit} handleChange={handleChange}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
