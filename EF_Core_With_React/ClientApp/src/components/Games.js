import React, { useEffect,useState } from 'react';
import axios from 'axios'
import  Game from './Game';



export default function Games() {

    const [games, setGames] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        callApi()
        setId(localStorage.getItem("id"));

    }, [])  
    const callApi = ()=> {
        axios({
            method: "get",
            url: "https://localhost:5001/Games"
        }).then((response) => {
            setGames(response.data )
        }).catch((e) => {
            console.log("error", e);
        });
    };

    const AddFav = (game) =>{
        axios({
            method: "post",
            url: `https://localhost:5001/FavoriteGames/Favorite?userId=${id}&gameId=${game.id}`
        }).then((response) => {
            console.log(response)
            // setGame(response )
        }).catch((e) => {
            console.log("error", e);
        });
    }


    const Allgamess = games.map((game, index) => (
        <div className="col-md-3 GameComp" key={index}>
            <Game game={game} onClick={() => AddFav(game)} icon = "❤︎"/>
        </div>

    ))
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 GamesContainer"style={{paddingTop: "5%",paddingBottom: "10%"}}>
            {Allgamess}
        </div>
    )
}