import axios from 'axios';
import React, { Component } from 'react';
import Movie from '../components/Movie';

export default class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { movies: [], loading: true };
    }
    
    componentDidMount() {
        this.populateMovies();
    }

    static renderMovies(movies) {
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

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderMovies(this.state.movies);
        
        return (
            <>
                <div className="row w-100">
                    <h1 className="w-100 text-center">Browse Movies</h1>
                </div>
                <div className="row">
                    {contents}
                </div>
            </>
        )
    }

    async populateMovies() {
        const { data } = await axios.get(process.env.REACT_APP_API + 'movies');
        this.setState({ movies: data.$values, loading: false });
    }
}
