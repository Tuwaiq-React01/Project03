import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageContainer from './Common/ImageContainer';
import MovieRate from './Common/MovieRate';
import SelectedMovieDetails from './Common/SelectedMovieDetails';
import { useParams } from 'react-router';

const SelectedMovie = () => {
	let { id } = useParams();
	const apiURL = `https://api.themoviedb.org/3/movie/${id}?&api_key=9e058083ea188da98174ef4a8d1c2f31`;

	const [movie, setMovie] = useState({});

	let getMovieDetails = async () => {
		const fetchMovie = await axios.get(apiURL);
		const movieData = fetchMovie.data;
		setMovie(movieData);
	};

	useEffect(() => {
		try {
			getMovieDetails();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			{movie && (
				<div className='selected-movie-card'>
					<div className='selected-movie-container'>
						<div className='poster-container'>
							<ImageContainer
								poster_path={movie.poster_path}
								title={movie.title}
								defClass='picked-movie'
							/>
							<MovieRate
								vote_average={movie.vote_average}
								vote_count={movie.vote_count}
								defClass={'selected-rate'}
							/>
						</div>
						<SelectedMovieDetails movie={movie} />
					</div>
				</div>
			)}
		</>
	);
};

export default SelectedMovie;
