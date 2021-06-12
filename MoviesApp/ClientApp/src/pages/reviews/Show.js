import React, { useState } from 'react';
import Review from '../../components/Review';
import { Card, CardBody, Button, Col } from 'reactstrap';
import { Redirect } from "react-router-dom";
import axios from 'axios';

function ShowReviews(props) {
    const [value, setValue] = useState(0); // used to force reRender
    const [movie, setMovie] = useState(props.location.state.movie);
    const [targetReview, setTargetReview] = useState({});
    const [edit, setEdit] = useState(false);
    const [create, setCreate] = useState(false);
    
    if(create) {
        return <Redirect to = {{ pathname: "/create-review", state: { movie: movie } }} />;
    } else if(edit) {
        return <Redirect to = {{ pathname: "/edit-review", state: { movie: movie, review: targetReview } }} />;
    }

    const removeReview = (review, index) => {
        movie.reviews.$values.splice(index, 1);
        setValue(value + 1);
        deleteReview(review);
    }

    const deleteReview = async (review) => {
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

    if(movie.reviews.$values.length == 0) {
        return (
            <>
                <Col xs={12}>
                    <Button onClick={() => setCreate(true)} color="primary">Add review</Button>
                </Col>
                <h1>No reviews yet</h1>
            </>
        )
    }

    return (
        <>
            <Col xs={12}>
                <Button onClick={() => setCreate(true)} color="primary">Add review</Button>
            </Col>
                
            {
                movie.reviews.$values.map((review, index) => {
                    return(
                        <Col key={index} xs={12} className="mt-4">
                            <Card>
                                <CardBody>
                                    <Review review={review} />
                                    <Button className="mr-4" onClick={() => {
                                        setTargetReview(review);
                                        setEdit(true);
                                    }} color="success">Edit</Button>
                                    <Button onClick={() => removeReview(review, index)} color="danger">Delete</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })
            }
        </>
    );
}

export default ShowReviews;

