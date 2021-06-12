import React from 'react';

const MovieRate = ({ vote_average, defClass = 'rate' }) => {
	return (
		<div className={defClass}>
			<span
				className={`badge badge-pill ${
					vote_average >= 7.5
						? 'bg-success'
						: vote_average >= 6.5
						? 'bg-warning'
						: 'bg-danger'
				}`}
			>
				{vote_average}
			</span>
		</div>
	);
};

export default MovieRate;
