import React, {Component, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function SearchTvShowOutside() {

    const [tvShowList, setTvShowList] = useState([]);
    const [title, setTitle] = useState("");
    const [show, setShow] = useState(false);

    const history = useHistory();

    const serach = () => {
        axios.get(`https://localhost:5001/api/searchtvshows/${title}`)
            .then(res => {
                console.log(res.data)
                const list = res.data;
                setTvShowList(list)
                setShow(true)
            }).catch(err => {
            console.log("Error")
        })
    }

    const titleOnChange = (event) => {
        setTitle(event.target.value);
    }

    const addToDatabase = (tvShow) => {
        axios.post("https://localhost:5001/api/tvshows", {
            title: tvShow.title,
            date: tvShow.date,
            summary: tvShow.summary,
            rating: tvShow.rating,
            poster: tvShow.poster,
        }).then(res => {
            console.log(res);
            history.push("/tv-shows");
        }).catch(err => console.log(err));
    }

    const renderTvShowsTable = (tvShowList) => {
        return (
            <table className='table table-striped table-hover table-dark' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>Rating</th>
                    <th>Poster</th>
                    <th>Favorite</th>
                </tr>
                </thead>
                <tbody>
                {tvShowList.map((tvShow, index) =>
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{tvShow.title}</td>
                        <td>{tvShow.date}</td>
                        <td>{tvShow.summary}</td>
                        <td>{tvShow.rating}</td>
                        <td><img src={tvShow.poster} height="200px" alt="not supported"/></td>
                        <td>
                            <button onClick={()=> addToDatabase(tvShow)} className="btn btn-primary">Add To Database</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    let contents = show
        ? renderTvShowsTable(tvShowList)
        : null;

    return (
        <div>
            <div
                className="card"
                style={{
                    width: "22rem",
                    margin: "0 auto",
                    marginTop: "3em",
                    marginBottom: "3em",
                    textAlign: "left",
                    padding: "1em",
                    backgroundColor: "#1c212a"
                }}
            >
                <div className="mb-3">
                    <label htmlFor="search" className="form-label" style={{fontWeight: "bold"}}>
                        Search
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="search"
                        aria-describedby="titleHelp"
                        onChange={titleOnChange}
                    />
                </div>
                <button type="submit" onClick={serach} className="btn btn-primary">
                    Search
                </button>

            </div>
            {contents}
        </div>
    );

}