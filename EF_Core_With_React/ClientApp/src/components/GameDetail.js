import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function GameDetail(props) {

    const [game, setGame] = useState({});
    const [screenShots, setScreenShots] = useState([]);
    const [gameId, setGameId] = useState(props.match.params.id);

    useEffect(() => {
        callApi()
    }, [])

    const callApi = () => {
        axios({
            method: "get",
            url: `https://localhost:5001/GameDetails/${gameId.slice(1)}` // id
        }).then((response) => {
            // console.log(response.data)
            setGame(response.data.gameDetail)
            setScreenShots(response.data.screenshots)
            console.log(game)
        }).catch((e) => {
            console.log("error", e);
        });
    };





    return (
        <div style={{paddingTop: "10%",paddingBottom: "10%"}}>
            <div className="card mb-3">

                <Link to={`/RGames`} className="stretched-link">

                    <span style={{ position: "absolute" }}>
                        <button href="/RGames" type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </span>
                </Link>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ width: "1050px", marginLeft: "28px", borderRadius: "7px" }}>
                    <div className="carousel-inner" style={{ top: "30px" }}>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={screenShots[0]} alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={screenShots[1]} alt="Second slide" ></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={screenShots[2]} alt="Third slide"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="card-body">
                    <br />
                    <p className="card-text"><small>{game.description}</small></p>
                    <p className="card-text">
                        <small className="text-muted">
                            <span style={{ color: "green" }}> {game.status}</span> | Platform:  {game.platform}  | Developer: {game.developer} | Release Date : {game.releaseDate} </small>
                    </p>
                </div>
            </div>


        </div>
    )
}

