import React from 'react'
import { Link } from 'react-router-dom'
import Joke from './Joke'
import { Card } from 'react-bootstrap';
import './App.css'
export default function Home() {
    return (
        <div>
            <nav className="nav">
                <Link className="a" to="/home">Home</Link>
                <Link className="a" to="/About">About</Link>
            </nav>
            <Card body>
                <h1>Make Me Laugh!</h1>
                <Joke />
            </Card>
        </div>
    )
}
