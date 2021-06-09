import React from 'react'
import MovieList from './components/MovieList'
import SearchArea from './components/SearchArea'


export default function Home(props) {
    return (
        <div>
            <SearchArea handleSubmit={props.handleSubmit} handleChange={props.handleChange}/>
            <MovieList movies={props.movies}/>
        </div>
    )
}
