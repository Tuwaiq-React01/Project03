import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
export default function Joke() {

    const [joke, setJoke] = useState("")

    useEffect(() => {
        handleClick()
    }, [])

    const handleClick = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
            .then(res => {
                console.log(res.data)
                setJoke(res.data)
            })
    }

    return (
        <div>
            <br></br>
            <br></br>
            <h4>
                {joke.setup}
            </h4>
            <h5>
                {joke.punchline}
            </h5>
            <br></br>
            <Button onClick={handleClick}>New Joke</Button>
        </div>
    )
}
