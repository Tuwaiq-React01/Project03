// author, content
import React from 'react';
import { CardTitle, CardText } from 'reactstrap';

function Review(props) {
    const review = props.review;
    return (
        <>
            <CardTitle tag="h5">Author: {review.author}</CardTitle>
            <CardText style={{whiteSpace: "pre-wrap"}}>Review: {review.content}</CardText>
        </>
    )
}

export default Review

