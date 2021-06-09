import { Card, Col } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {

    return (
        <Col md="4" sm="4" className="mb-3">

            <Card className="card-movie" onClick={() => props.setSelectedMovie(props.movie)}>
                <Link to={`/movies/${props.movie.id}`} >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${props.movie.poster_path}`}
                        style={{ margin: "auto", objectFit: "cover" }} />
                </Link>
                <Card.Body className="mt-1 text-center dark ">
                    <h6> {props.movie.title}</h6>
                </Card.Body>
            </Card>

        </Col>
    );
}

export default MovieCard;

