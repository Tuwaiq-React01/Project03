import React, { Component } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';

export default class Top extends Component {
    static displayName = Top.name;

    constructor(props) {
        super(props);
        this.state = { movies: [], loading: true };
    }
    
    componentDidMount() {
        this.populateTopMovies();
    }

    static renderTopTenMovies(movies) {
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
            : Top.renderTopTenMovies(this.state.movies);
        
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

    async populateTopMovies() {
        const { data } = await axios.get(process.env.REACT_APP_API + 'movies?top=true');
        this.setState({ movies: data.$values, loading: false });
    }
}
