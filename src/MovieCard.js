import './App.css'
import React, {useState} from 'react'
import { useAlert } from "react-alert";

export const MovieCard = ({ Movie, MovieList, InMyFav , removeMovie }) => {
  const [Add, setAdd] = useState(!Movie.InMyList);
  const alert = useAlert();
  const addToFav = Movie => {
    Movie.InMyList = true;
    MovieList.push(Movie);
    alert.success("Added to List!");
    localStorage.setItem('MyMovies', MovieList);
    localStorage.setItem("LoggedIn", false);
  };

  const removeFromFav = Movie => {
    Movie.InMyList = false;
    removeMovie();
    alert.success("Removed from List!");
  };
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            className="card-img-top"
            src={Movie.Poster}
            alt="Movie image"
            style={{ width: '200px', height: '300px' }}
          ></img>
        </div>
        <div className="flip-card-back text-white">
          <div className="">
            <h5>{Movie.Title}</h5>
          </div>
          <div className="card-body text-black">
            <h6 className="card-title">Year: {Movie.Year}</h6>
          </div>
          <div className="card-footer bg-transparent border-success">
          {
            InMyFav ? <button type="button" className="btn btn-danger bottom" onClick={() => removeFromFav(Movie)}>Remove From List</button> : <button type="button" disabled={!Add} onClick={() =>  {
              if(Add) addToFav(Movie);
              else removeFromFav(Movie);
              setAdd(!Add);
            }} className="btn btn-dark bottom">{Add && !InMyFav ? "Add to My List" : "In My List"}</button>
          }
          </div>
        </div>
      </div>
    </div>
  )
}