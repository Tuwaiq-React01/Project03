import React from 'react';
import MovieCard from './MovieCard'

export default function Latest (props) {

    return(

        <div>
            {props.movieList.map((m)=>{
                return <MovieCard movie={m}/>
            })}


        </div>
    )

}
