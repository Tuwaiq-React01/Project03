import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import './App.css'
export default function Contact() {
    const [number, setNumber] = useState("")

    useEffect(() => {
        setNumber("0563906374")
    }, [])
    return (
        <div>
            <nav className="nav">
                <Link className="a" to="/home">Home</Link>
                <Link className="a" to="/About">About</Link>
            </nav>
            <Card body>
                <h1>About Jokes</h1>
                <br />
                <br />
                <b>
                    A joke is a display of humour in which words are used within a specific and well-defined narrative structure to make people laugh and is usually not meant to be taken seriously. It takes the form of a story, usually with dialogue, and ends in a punch line. It is in the punch line that the audience becomes aware that the story contains a second, conflicting meaning. This can be done using a pun or other word play such as irony or sarcasm, a logical incompatibility, nonsense, or other means.
                </b>
            </Card>
        </div>
    )
}
