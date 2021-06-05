import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

export default class edit extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: this.props.location.state.movie,
            review: {
            ID: this.props.location.state.review.id,
            MovieID: this.props.location.state.review.movieID,
            Author: this.props.location.state.review.author,
            Content: this.props.location.state.review.content
        }, redirect: false};
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to = {{ pathname: "/"}} />;
        }

        const review = this.state.review;

        return (
            <Col xs={12}>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="author" id="author" value={review.Author} placeholder="Author name" onChange={(event) => this.updateAuthor(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Review</Label>
                        <Input style={{whiteSpace: "pre-wrap"}} type="textarea" name="content" id="content" value={review.Content} placeholder="content" onChange={(event) => this.updateContent(event)}/>
                    </FormGroup>
                    <Button onClick={() => this.updateReview()} color="primary">Submit</Button>
                </Form>
            </Col>
        )
    }

    updateAuthor(event) {
        const review = {
            ID: this.state.review.ID,
            MovieID: this.state.review.MovieID,
            Author: event.target.value,
            Content: this.state.review.Content
        };

        this.setState({review: review});
    }
    updateContent(event) {
        const review = {
            ID: this.state.review.ID,
            MovieID: this.state.review.MovieID,
            Author: this.state.review.Author,
            Content: event.target.value
        };

        this.setState({review: review});
    }

    async updateReview() {
        const review = this.state.review;
        const movie = this.state.movie;

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
        
        this.setState({movie: movie, redirect: true});
    }
}
