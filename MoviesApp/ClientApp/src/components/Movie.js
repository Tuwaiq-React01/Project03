import React, { useState } from 'react'
import { Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Redirect } from "react-router-dom";

function Movie(props) {
    const [redirect, setRedirect] = useState(false);
    const movie = props.movie;

    if(redirect) {
        return <Redirect to = {{ pathname: "/Reviews", state: { movie: movie } }} />;
    }

    return (
        <Col xs="4" className="mt-5 text-center">
            <Card>
                <CardImg top width="100%" src={movie.coverURL} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{movie.name}</CardTitle>
                    <CardText>Rating: {movie.rating}</CardText>
                    <Button onClick={() => setRedirect(true)}>Reviews</Button>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Movie;

