import { Container, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

import React from 'react';

const Home = (props) => {
    const allmovies = props.topMovies.map((movie, i) => {
        return <MovieCard key={i} movie={movie} setSelectedMovie={props.setSelectedMovie} />
    })

    return (

        <Container className="mb-5 mt-3">
            <Row className="justify-content-md-center">
                {allmovies}
            </Row>
        </Container>

    );
}

export default Home;

