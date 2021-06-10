import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'

export default function MovieCard(props) {
    console.log(props)
    return (
        <div className="card" style={{backgroundColor:"rgba(10, 10, 3, 0.897)"}}>
            <div>
            
            <img className="card-img-top" src={`http://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
            <h2 className ="card-header" style={{color:"white"}}><b>{props.movie.title}</b></h2>

            <div calssName="card-body">
                
                <p className="block-text"> <strong>Release Date: </strong>{props.movie.release_date}</p>

                <p className="block-text"> <strong> Popularity: </strong>{props.movie.popularity}</p>

            </div>

            <a href="#" class="btn btn-dark"> Details </a>
            
            </div>

        </div>
    )
}




