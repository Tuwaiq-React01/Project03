import React, { useState, useEffect } from "react";
import Movie from "../Movie";
import axios from "axios";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Index() {
  const [MoviesList, setMovieList] = useState([]);
  const [path, setPath] = useState("/popular");
  const [name, setName] = useState("");
  useEffect(() => {
    fetchData();
    setName(localStorage.getItem("name"));
    return () => {};
  }, [path]);

  const fetchData = () => {
    axios
      .get(`${path}?api_key=90f0bceaa16397e4bcacdf6b9a3b87c5&language=en-US`)
      .then((response) => {
        setMovieList(response.data.results);
        console.log(response.data);
      });
  };

  const BookMovie = (movie) => {
    var movies = [...MoviesList];
    var index = movies.indexOf(movie);
    movies.splice(index, 1);
    // this.setState({
    //   MoviesList: movies,
    // });
  };
  const changePath = (pathLink) => {
    setPath(pathLink);
  };

  const logOut = () => {
    localStorage.clear();
  };
  return (
    <div className="HomeBody">
      <nav class="navbar navbar-expand-lg navbar-dark nav-dark">
        <Link
          class="navbar-brand"
          to="/"
          onClick={() => changePath("/popular")}
        >
          Ezz Movies
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link
                class="nav-link"
                to="/"
                onClick={() => changePath("/popular")}
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/top_rated"
                onClick={() => changePath("/top_rated")}
              >
                Top Rated
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/upcoming"
                onClick={() => changePath("/upcoming")}
              >
                Upcoming
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/logOut" onClick={logOut}>
                Log Out
              </Link>
            </li>
          </ul>
          <span class="navbar-text">{name}</span>
        </div>
      </nav>

      <div className="App">
        {MoviesList.map((movie, index) => (
          <Movie
            key={index}
            name={movie.original_title}
            language={movie.original_language}
            vote={movie.vote_average}
            releaseDate={movie.release_date}
            img={movie.poster_path}
            onClick={BookMovie(movie)}
          />
        ))}
      </div>
    </div>
  );
}
