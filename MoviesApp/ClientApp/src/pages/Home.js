import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        populateMovies();
    }, []);

    const renderMovies = (movies) => {
        if(movies.length == 0) {
            return <h1>No movies yet</h1>
        }

        return (
            <>
                {
                    movies.map((movie, index) =>
                        <Movie key={index} movie={movie} />
                    )
                }
            </>
        );
    }

    const populateMovies = async () => {
        const { data } = await axios.get(process.env.REACT_APP_API + 'movies');
        setMovies(data.$values);
        setLoading(false);
    }

    const contents = loading ?
    <p><em>Loading...</em></p>
    : renderMovies(movies);

    return (
        <>
            <div className="row w-100">
                <h1 className="w-100 text-center">Browse Movies</h1>
            </div>
            <div className="row">
                {contents}
            </div>
        </>
    );
}

export default Home;
