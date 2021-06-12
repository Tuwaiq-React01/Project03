import { MovieCard } from './MovieCard.js'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


let type = [
  'alarm',
  'beach',
  'cool',
  'cold',
  'city',
  'life',
  'fire',
  'good',
  'dark',
  'real',
  'big',
  'goal',
  'army',
  'fight',
  'suits',
  'game',
  'love',
  'money',
  'true',
  'crime',
  'fast',
  'slow',
  'strong',
  'great',
  'family',
  'anime',
  'one',
  'three',
]
const options = {
  timeout: 1500,
  position: positions.BOTTOM_CENTER
};

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
  }
  componentDidMount() {
    localStorage.setItem("LoggedIn", "false");
    type.map((t) => {
      axios
        .get(`http://www.omdbapi.com/?s=${t}&apikey=b67cf7c7`)
        .then((res) => {
          const allMovies = res.data.Search;
          allMovies.InMyList = false;
          this.setState({ movies: [...this.state.movies, ...allMovies] }); //another array
        })
        .catch((error) => console.error(`Error:  ${error}`))
    })
   
  }
  render() {
    return (
      <>
        <div className="flexbox-container ">
          {this.state.movies.map((movie) => {
            return (
              <Provider template={AlertTemplate} {...options}>
                <MovieCard
                  MovieList={this.props.MovieList}
                  Movie={movie}
                ></MovieCard>
              </Provider>
            )
          })}
        </div>
      </>
    )
  }
}
export default Movies
