import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

function Edit(props) {
    const [movie, setMovie] = useState(props.location.state.movie);
    const [redirect, setRedirect] = useState(false);
    const [review, setReview] = useState({
        ID: props.location.state.review.id,
        MovieID: props.location.state.review.movieID,
        Author: props.location.state.review.author,
        Content: props.location.state.review.content
    });

    const updateAuthor = (event) => {
        const result = {
            ID: review.ID,
            MovieID: review.MovieID,
            Author: event.target.value,
            Content: review.Content
        };

        setReview(result);
    }

    const updateContent = (event) => {
        const result = {
            ID: review.ID,
            MovieID: review.MovieID,
            Author: review.Author,
            Content: event.target.value
        };

        setReview(result);
    }

    const updateReview = async () => {
        movie.reviews.$values = movie.reviews.$values.filter((value, index) => {
            return value.id == review.ID ? review : value;
        });

        axios({
            url: process.env.REACT_APP_API + `movies/${review.MovieID}/reviews/${review.ID}`,
            method: "PUT",
            data: review,
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((error) => {
            console.error(`Failed to edit a review with the id: ${review.id}`);
            console.error(`Error message: ${error}`);
        });
        
        setRedirect(true);
    }

    if(redirect) {
        return <Redirect to = {{ pathname: "/"}} />;
    }

    return (
        <Col xs={12}>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="author" id="author" value={review.Author} placeholder="Author name" onChange={updateAuthor}/>
                </FormGroup>
                <FormGroup>
                    <Label>Review</Label>
                    <Input style={{whiteSpace: "pre-wrap"}} type="textarea" name="content" id="content" value={review.Content} placeholder="content" onChange={updateContent}/>
                </FormGroup>
                <Button onClick={updateReview} color="primary">Submit</Button>
            </Form>
        </Col>
    )
}

export default Edit;

