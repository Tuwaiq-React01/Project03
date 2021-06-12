import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = () => {
	const [movies, setMovies] = useState([]);

	let apiUrl =
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e058083ea188da98174ef4a8d1c2f31&page=1';

	let getMovies = async () => {
		const movies = await axios.get(apiUrl);
		const moviesData = movies.data.results;
		setMovies(moviesData);
	};

	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div className='row d-flex justify-content-around'>
			{movies.map((movie) => {
				return <MovieCard key={movie.id} {...movie} />;
			})}
		</div>
	);
};

export default Movie;
