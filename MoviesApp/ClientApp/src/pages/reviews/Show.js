import React, { Component } from 'react';
import Review from '../../components/Review';
import { Card, CardBody, Button, Col } from 'reactstrap';
import { Redirect } from "react-router-dom";
import axios from 'axios';

export default class Reviews extends Component {
    static displayName = Reviews.name;

    constructor(props) {
        super(props);
        
        this.state = {
            movie: this.props.location.state.movie,
            targetReview: null,
            edit: false,
            create: false
        };
    }

    render() {
        const movie = this.state.movie;

        if(this.state.create) {
            return <Redirect to = {{ pathname: "/create-review", state: { movie: movie } }} />;
        } else if(this.state.edit) {
            return <Redirect to = {{ pathname: "/edit-review", state: { movie: this.state.movie, review: this.state.targetReview } }} />;
        }

        if(movie.reviews.$values.length == 0) {
            return (
                <>
                    <Col xs={12}>
                        <Button onClick={() => this.setState({movie: this.state.movie, create: true})} color="primary">Add review</Button>
                    </Col>
                    <h1>No reviews yet</h1>
                </>
            )
        }

        return (
            <>
                <Col xs={12}>
                    <Button onClick={() => this.setState({movie: this.state.movie, create: true})} color="primary">Add review</Button>
                </Col>
                 
                {
                    movie.reviews.$values.map((review, index) => {
                        return(
                            <Col xs={12} className="mt-4">
                                <Card>
                                    <CardBody>
                                        <Review key={index} review={review} />
                                        <Button className="mr-4" onClick={() => this.setState({targetReview: review, edit: true})} color="success">Edit</Button>
                                        <Button onClick={() => this.removeReview(review, index)} color="danger">Delete</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    })
                }
            </>
        )
    }

    removeReview(review, index) {
        const movie = this.state.movie;
        movie.reviews.$values.splice(index, 1);
        this.deleteReview(review);
        this.setState({movie: movie, create: false});
    }

    async deleteReview(review) {
        const movie = this.state.movie;
        
        axios({
            url: process.env.REACT_APP_API + `movies/${movie.id}/reviews/${review.id}`,
            method: 'DELETE',
            data: review,
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((error) => {
            console.error(`Failed to delete a review with the id: ${review.id}`);
            console.error(`Error message: ${error}`);
        });
    }
}
