import React, { Component } from 'react';
import axios from 'axios'
import { Game } from './Game';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>

            <div className="text-center">
                <img src="https://www.freepnglogos.com/uploads/games-png/download-games-png-transparent-for-designing-work-5.png" width="500" height="500" className="d-inline-block align-top" alt=""/>

                <h1 className="display-4">Game On The House </h1>
                <div>
                    Your only HOME where you can find all the free games.
                    <Link to="/RSignIn">
                    <h3 style={{color:"floralwhite"}}> Discover Now!</h3>
                    </Link>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}