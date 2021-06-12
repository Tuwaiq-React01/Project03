import React from "react";
import "./style.css";

export default function Index(props) {
  return (
    <div className="MovieInfo">
      <img
        src={"https://image.tmdb.org/t/p/w500" + props.img}
        className="poster"
        width="200px"
        alt={props.name}
      />
      <div className="details">
        <h6 className="MovieName">{props.name}</h6>
        <div className="info">
          <span>
            <span className="infoTitle">Language : </span>{" "}
            {props.language.toUpperCase()}
          </span>
          <span>
            <span className="infoTitle">Votes : </span> {props.vote} / 10
          </span>
          <span>
            <span className="infoTitle">Release Date : </span>{" "}
            {props.releaseDate}
          </span>
        </div>
        {/* <button onClick={props.onClick}>BOOK</button> */}
      </div>
    </div>
  );
}
