import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNavBar from "./Components/MyNavBar"
import './App.css';
import Home from './Components/Home';
import Browse from './Components/Browse';
import About from './Components/About';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ShowOneMovie from './Components/ShowOneMovie';

const App = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [selectedMovie , setSelectedMovie] = useState({})

  useEffect(() => {
    getTopMovies();
  }, []);

  const getTopMovies = () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=10d10fd3d18e1e9190e6ca2981496aac&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate'
    axios.get(url)
      .then((res) => {
        setTopMovies(topMovies => [...topMovies, ...res.data.results])
      }).catch((err) => {
        console.log(err);
      })
    const url2 = 'https://api.themoviedb.org/3/discover/movie?api_key=10d10fd3d18e1e9190e6ca2981496aac&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&with_watch_monetization_types=flatrate'
    axios.get(url2)
      .then((res) => {
        setTopMovies(topMovies => [...topMovies, ...res.data.results])
      }).catch((err) => {
        console.log(err);
      })
    const url3 = 'https://api.themoviedb.org/3/discover/movie?api_key=10d10fd3d18e1e9190e6ca2981496aac&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_watch_monetization_types=flatrate'
    axios.get(url3)
      .then((res) => {
        setTopMovies(topMovies => [...topMovies, ...res.data.results])
      }).catch((err) => {
        console.log(err);
      })
  }
  return (
    <Router >
      <MyNavBar />
      <Route path="/movies/:id">
        <ShowOneMovie movie={selectedMovie} />
      </Route>
      <Route exact path="/">
        <Home topMovies={topMovies} setSelectedMovie={setSelectedMovie} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/browse">
        <Browse setSelectedMovie={setSelectedMovie}  />
      </Route>

    </Router>
  );
}

export default App;



