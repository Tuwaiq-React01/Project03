import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faCalendarAlt,
	faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import MovieDetailsIcons from './MovieDetailsIcons';

const imgUrl = 'https://image.tmdb.org/t/p/w500';

const SelectedMovieDetails = ({ movie }) => {
	let getGenre = () => {
		const movieGenres = movie.genres;
		const genres = [];
		if (!movieGenres) return;
		movie.genres.forEach((genre) => {
			genres.push(genre.name);
		});
		return genres.join(', ');
	};

	let getTime = () => {
		const time = movie.runtime;
		let Hours = Math.floor(time / 60);
		let minutes = time % 60;
		return `${Hours}h ${minutes} min`;
	};
	return (
		<>
			{movie && (
				<div className='selected-movie-details'>
					<h1>{movie.title}</h1>
					<div className='movie-details-text'>
						<MovieDetailsIcons type={faClock} callback={getTime} />
						<MovieDetailsIcons type={faFileAlt} callback={getGenre} />
						<p>
							<FontAwesomeIcon icon={faCalendarAlt} className='mr-6' />
							{movie.release_date || movie.first_air_date}
						</p>
					</div>
					<p>{movie.overview}</p>
					<div
						className='blur-bg'
						style={{
							backgroundImage: `url(${imgUrl}${movie.backdrop_path})`,
						}}
					></div>
				</div>
			)}
		</>
	);
};

export default SelectedMovieDetails;
