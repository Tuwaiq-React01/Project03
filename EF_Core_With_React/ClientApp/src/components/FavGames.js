import React, { useState,useEffect } from 'react';
import axios from 'axios'
import  Game from './Game';
import '../custom.css'

export default function FavGames() {
  const [games, setGames] = useState([]);
  const [id, setId] = useState(localStorage.getItem("id"));


  useEffect(() => {
      callApi()
  },[])  

  const callApi = ()=> {
      axios({
          method: "get",
          url: `https://localhost:5001/FavoriteGames/${id}` // id
        //   localStorage.getItem("picture");
      }).then((response) => {
          console.log(response)
          if(response.status==200)
              setGames(response.data)
      }).catch((e) => {
          console.log("error", e);
      });
  };

  const RemoveFav = (game) =>{
    axios({
        method: "delete",
        url: `https://localhost:5001/FavoriteGames/UnFavorite?userId=${id}&gameId=${game.id}`
    }).then((response) => {
        // callApi()
    }).catch((e) => {
        console.log("error", e);
    });
  };


  const Allgamess = games.map((game, index) => (
      <div className="col-md-3 GameComp" key={index}>
          <Game game={game} onClick={() => RemoveFav(game)} icon = "✘"/>
      </div>

  ));
  return (
    <div style={{paddingTop: "5%",paddingBottom: "10%"}}>
      <br/>
      <center> <h1 className="headerLight">Your Favorites </h1></center>
      <div className="row row-cols-1 row-cols-md-2 g-4 GamesContainer">
          {Allgamess}
      </div>
    </div>
  )
}


