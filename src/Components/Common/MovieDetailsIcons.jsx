import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const MovieDetailsIcons = ({ type, callback }) => {
	return (
		<p>
			<FontAwesomeIcon icon={type} className='mr-3' />
			{callback()}
			<FontAwesomeIcon icon={faEllipsisV} className='ml-2' />
		</p>
	);
};

export default MovieDetailsIcons;
