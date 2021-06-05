import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {author: "", content: ""};
    }
    render() {
        return (
            <Col xs={12}>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="author" id="author" value={this.state.author} placeholder="Author name" onChange={(event) => this.updateAuthor(event)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Review</Label>
                        <Input type="textarea" name="content" id="content" value={this.state.content} placeholder="content" onChange={(event) => this.updateContent(event)}/>
                    </FormGroup>
                    <Button onClick={() => this.createReview()} color="primary">Submit</Button>
                </Form>
            </Col>
        )
    }

    updateAuthor(event) {
        this.setState({author: event.target.value, content: this.state.content});
    }
    updateContent(event) {
        this.setState({author: this.state.author, content: event.target.value});
    }

    createReview() {
        const review = {
            MovieID: this.props.location.state.movie.id,
            Author: this.state.author,
            Content: this.state.content
        }
        
        this.postReview(review);
        this.setState({author: "", content: ""});
    }

    async postReview(review) {
        axios({
            url: process.env.REACT_APP_API + `movies/${this.props.location.state.movie.id}/reviews`,
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
}
