import React, { Component } from 'react'
import axios from 'axios'

export default class Anime extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //console.log(this.props)
    }

    addToFavorite() {
        const anime = this.props.anime;
        if(anime.userId == 0) {
            anime.userId = 1;
            axios.put('https://localhost:5001/api/v1/Anime/' + anime.id, anime)
                .catch(err => console.log(err));
        } else {
            anime.userId = 0;
            axios.put('https://localhost:5001/api/v1/Anime/' + anime.id, anime)
                .catch(err => console.log(err));
        }
    }

    render() {
        const anime = this.props.anime;
        return (
                <div>
                    <div className="card m-3 d-flex justify-content-between" style={{width:"20rem", height:"31rem"}}>
                        <div className="text-center">
                        <img src={anime.imageUrl} className="card-img-top" style={{height:300}} alt=""/>
                        <h5 className="card-title mt-2">{anime.title}</h5>
                        </div>

                        <div className="text-center">
                            <p className="card-text"><strong >Type : {anime.type}</strong></p>
                            <button onClick={() => this.addToFavorite()} className="btn btn-primary mb-2 text-light"> {this.props.actionType}</button>
                        </div>
                    </div>
                </div>
        )
    }
}