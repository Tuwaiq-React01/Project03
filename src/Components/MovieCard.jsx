import React from 'react';
import ImageContainer from './Common/ImageContainer';
import MovieRate from './Common/MovieRate';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, release_date, poster_path, vote_average, id }) => {
	return (
		<Link
			to={`/details/${id}`}
			key={id}
			className='card__body col-lg-3 col-md-4 col-sm-6'
		>
			<div className='movie-card'>
				<MovieRate vote_average={vote_average} />
				<ImageContainer poster_path={poster_path} title={title} />
				<div className='details'>
					<p>{title}</p>
					<p>Release Date: {release_date}</p>
				</div>
			</div>
		</Link>
	);
};

export default MovieCard;
