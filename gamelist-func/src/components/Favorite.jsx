import React, { useState, useEffect } from 'react';
import Games from './Games'

export default function Favorite(props) {
  const [games, setGames] = useState([]);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(props.favs);
  }, []);

  const removeFav = (game) => {
    props.removeFav(game);
  };

  const removeAll = () => {
    props.removeAll();
  };

  return (
    <div className="container">
      <h1 className="display-4">Favorites: </h1>
      <button className="btn btn-danger" onClick={removeAll}>
        REMOVE ALL
      </button>
      {props.favs.length ? (
        <Games
          list={props.favs}
          favMode={true}
          removeFav={removeFav}
        />
      ) : (
        <div className="text-center">
          <h1 className=" display-6 emptyList">
            you don't have any favotire games.
          </h1>
          <a role="button" className="btn btn-info" href="/games">
            Browse Games!
          </a>
        </div>
      )}
    </div>
  );
}
