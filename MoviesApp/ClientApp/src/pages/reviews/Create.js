import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

function Create(props) {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const updateAuthor = (event) => {
        setAuthor(event.target.value);
    }
    const updateContent = (event) => {
        setContent(event.target.value);
    }

    const createReview = () => {
        const review = {
            MovieID: props.location.state.movie.id,
            Author: author,
            Content: content
        }
        
        postReview(review);
        setAuthor("");
        setContent("");
    }

    const postReview = async (review) => {
        axios({
            url: process.env.REACT_APP_API + `movies/${props.location.state.movie.id}/reviews`,
            method: "POST",
            data: review,
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((error) => {
            console.error(`Failed to create a review`);
            console.error(`Error message: ${error}`);
        });
    }

    return (
        <Col xs={12}>
            <Form>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="author" id="author" value={author} placeholder="Author name" onChange={updateAuthor}/>
                </FormGroup>
                <FormGroup>
                    <Label>Review</Label>
                    <Input type="textarea" name="content" id="content" value={content} placeholder="content" onChange={updateContent}/>
                </FormGroup>
                <Button onClick={createReview} color="primary">Submit</Button>
            </Form>
        </Col>
    )
}

export default Create;

