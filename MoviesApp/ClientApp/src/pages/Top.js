import React, { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';

function Top() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        populateTopMovies();
    }, []);

    const renderTopTenMovies = (movies) => {
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
    
    const populateTopMovies = async () => {
        const { data } = await axios.get(process.env.REACT_APP_API + 'movies?top=true');
        setMovies(data.$values);
        setLoading(false);
    }

    const contents = loading ?
    <p><em>Loading...</em></p>
    : renderTopTenMovies(movies);
    
    return (
        <>
            <div className="row w-100">
                <h1 className="w-100 text-center">Top 10 movies</h1>
            </div>
            <div className="row">
                {contents}
            </div>
        </>
    )

    
}

export default Top;
