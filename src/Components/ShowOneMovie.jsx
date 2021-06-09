import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const ShowOneMovie = (props) => {
    console.log(props.movie);
    return (

        <Container className="mb-5 mt-5 p-4 " className="one-movie"
        style={{color:"rgb(49, 49, 49)"}}>
            <Row className="justify-content-md-center mt-3  text-center">
            
                <Col sm={4}>
                    <Image src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
                        style={{ margin: "auto", objectFit: "cover",maxWidth:"300px" }} className="img-fluid" >
                    </Image>
                </Col>
                <Col sm={8}>
                <Image src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
                        style={{ margin: "auto", objectFit: "cover" }} className="img-fluid mr-5"  >
                    </Image>
                </Col>

                <Col sm={4} className="mt-3">
                    <h3>
                        {`${props.movie.title} (${props.movie.original_title})`} 
                    </h3>
                    <h4>
                    ⭐{props.movie.vote_average}/10
                    </h4>
                </Col>
                <Col sm={8}>
                    <p>
                        {props.movie.overview}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default ShowOneMovie;
