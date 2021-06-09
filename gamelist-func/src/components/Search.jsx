import React, { useState, useEffect } from 'react';
import axios from "axios";
import Games from "./Games";

export default function Search(props) {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState('');

  useEffect(() => {
    setTarget(props.target);
    axios
    .get(
     `https://api.rawg.io/api/games?key=1418f80ceb1a47eca6e9964f0eb50613&page_size=25&search=${props.target}`
    )
    .then((res) => {
      console.log(res.data.results);
      setGames(res.data.results);
      setLoading(true);
    })
    .catch((err) => {
      console.error(err);
    });


  }, [])



  const addToFav = (game) => {
    props.addToFav(game);
}




  return (
    <div className="container">
    <h1>Search Results For: {target} </h1>

{loading ? <Games list={games} addToFav={addToFav} /> : <div class="d-flex justify-content-center mt-5">
        <div
          class="spinner-border"
          style={{ width: " 10rem", height: "10rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> }





  </div>
  )
}
