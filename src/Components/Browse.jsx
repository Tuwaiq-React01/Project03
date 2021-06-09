import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const Browse = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=10d10fd3d18e1e9190e6ca2981496aac&query=${searchTerm}`)
            .then(res => {
                setMovies(movies => [...res.data.results])
            }).catch(err => console.log(err))
    }, [searchTerm]);

    const allmovies = movies.map((movie, i) => {
        return <MovieCard key={i} movie={movie} setSelectedMovie={props.setSelectedMovie} />
    })
    return (
        <div>
            <Container className="mb-5 mt-3">
                <Form>
                    <Form.Group >
                        <Form.Label column sm="2">Search</Form.Label>
                        <Col sm="4">
                        <Form.Control type="text" placeholder="Search for your movie" 
                        onChange={(e)=>{setSearchTerm(e.target.value)}}
                        />
                        </Col>
                        
                    </Form.Group>
                  
                </Form>
                <hr/>
                <Row className="justify-content-md-center">
                    {allmovies}
                </Row>
            </Container>
        </div>
    );
}

export default Browse;
