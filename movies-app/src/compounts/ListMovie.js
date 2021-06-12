import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css';

export default function ListMovie(props) {
    return (
<div className="flip-card">	
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img src={props.item.Poster} alt="Avatar"width="300px" height="300px" />
        </div> 
        <div className="flip-card-back">
            <h1>{props.item.Title}</h1> 
			<h3>{props.item.Year}</h3>
            <h3>{props.item.Type}</h3>
			<Button className="btn btn-warning" >Details</Button>
        </div>
	</div>
</div>
    )
}