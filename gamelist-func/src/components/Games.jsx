import React, { useState, useEffect, useRef } from 'react';

export default function Games(props) {
  const [games, setGames] = useState([]);
  const [favs, setFavs] = useState([]);
  const favMode = props.favMode;
  const prevFavsRef = useRef(true);


  useEffect(() => {
    console.log("aaaaaaaaaa", favs);
    setGames(props.list);
    

    if (prevFavsRef.current) {
      prevFavsRef.current = false;
    } else {
        console.log("JJJJJJJJJJJJ", favs);
        props.addToFav(favs);
    }

  }, [favs]);



  // useEffect(() => {
  //   console.log("JJJJJJJJJJJJ", favs);
    // props.addToFav(favs);
  // }, [favs])



  const addFav = (game) => {
    setFavs(game);
  };

  const removeFav = (game) => {
    props.removeFav(game);
  };


  const displayGames = games.map((game, i) => {
    return (
      <div className="col-md-3 mt-5" key={i}>
        <div className="card text-white bg-dark" style={{ width: "18rem" }}>
          <img
            src={game.background_image}
            className="card-img-top"
            alt="..."
            width="200px"
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title"> {game.name} </h5>
            <p className="card-text">

            </p>

            <div className="rating">Rating: <div className={`rate ${
            game.metacritic >= 90 ? "above90" : "below90"
          }`}> {game.metacritic}%</div> </div>



{favMode ? <button onClick={()=> removeFav(game)} className="btn btn-danger">
              REMOVE
            </button> : <button onClick={()=> addFav(game)} className="btn btn-primary">
              Add to Favorite
            </button>}

          </div>
        </div>
      </div>
    );
  });



  return (
    <div className="container">
      <div className="row">{displayGames}</div>
    </div>
  );
}
