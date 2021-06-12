import React, { useState, useEffect } from 'react'
import Anime from '../components/Anime'
import axios from 'axios'

export default function FavAnime(props) {
    const [anime, setanime] = useState([]);

    useEffect(() => {
        callApi();
    }, [])

    function callApi() {
        axios({
            method : 'GET',
            url : 'https://localhost:5001/api/v1/Anime'
        })
        .then(response => {
          setanime(response.data);
        })
        .catch(() => console.log('error with http request!'));
    }

    const mappedAnime = anime.map(obj => {
        if(obj.userId === 1) {
            return (<Anime anime={obj} actionType = "Remove Anime"/>)
        }
    });

    return (
        <div>
            {localStorage.getItem('isAutenticated')
                ?
                <div>
                    <h2 className="m-3">Favorite Anime for <strong className="text-primary"><a href="./UserInfo">{localStorage.getItem('name')}</a></strong></h2>
                    <div className="d-flex justify-content-between flex-wrap">
                        { mappedAnime }
                    </div>
                </div>
                :
                <div>
                    <h1>Make sure you log in from login page.</h1>

                </div>
            }
        </div>
    )
}