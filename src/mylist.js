import React, { useState } from 'react'
import { MovieCard } from './MovieCard.js'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


export default function MyList({ MovieList, movies }) {
  const [Movies, setMovies] = useState(MovieList);
  const options = {
    timeout: 1500,
    position: positions.BOTTOM_CENTER
  };
  
  return (
    <div className="flexbox-container ">
    {Movies.map((movie, index) => {
      if(!movie.InMyList)
        return;
      
      return (
        <Provider template={AlertTemplate} {...options}>
        <MovieCard
          MovieList={Movies}
          InMyFav={true}
          Movie={movie}
          removeMovie={() => {
            Movies.splice(index, 1);
            setMovies([...Movies]);
          }} />
        </Provider>
      )
    })}
  </div>
  )
}
