import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


export default function Game(props) {

    const [game, setGame] = useState(props.game);


    useEffect(()=>{
        setGame(props.game);
    },[])

    return (
        <div className="card  w-850"style={{marginTop:"40px"}}>
            {props.game?
            <div>
            <div className="row no-gutters bg-light position-relative" style={{ alignItems: "center" }}>

                <img src={game.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-img-overlay" style={{ alignContent: "center", verticalAlign: "middle" }}>
                <Link to={`/RGameDetail:${game.id}`} className="stretched-link"></Link>
                </div>
            </div>

            <div className="card-body">
                <h5 className="card-title">{game.title} </h5>
                <p className="card-text"> {game.shortDcrp}</p>
                <a href={game.gameUrl} className="btn btn-outline-success" style={{ width: "80px", height: "25px", position: "absolute", left: " 45%", top: "90%" }}>
                <div className="GameDetail">
                    Play
                </div>
                </a>
                <button onClick={props.onClick} className="btn btn-outline-danger" style={{ width: "25px", height: "25px", position: "absolute", left: "80%", top: "90%" }}>
                    <div className="GameDetail">
                        {props.icon}
                    </div>
                </button>
            </div>
            </div>
            :null}
        </div>
    )
}
