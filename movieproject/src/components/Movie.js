import React from 'react';

const Movie = (props) => {
    return (

        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`}
                            alt="movie image" style={{ width: "100%", height: 360 }}></img> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`}
                                alt="movie image" style={{ width: "100%", height: 360 }}></img>
                    }
                </div>
                <div>
                    <div class="card-content">
                        <p>
                            {
                                props.title
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Movie;