import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function TvShows(props){

    const [tvShowList, setTvShowList] = useState([]);
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const user = props.user.id? props.user: null;

    useEffect(() => {
        getList()
    }, []);

    const getList = async () => {
        axios.get(`https://localhost:5001/api/tvshows`)
            .then(res => {
                const list = res.data;
                setTvShowList(list)
                setLoading(false)
            }).catch(err => {
            console.log("Error")
        })
    }

    const addToFav = (id) => {
        axios.post("https://localhost:5001/api/favoritetvshows", {
            tvShowId: id,
            userId: user.id
        }).then(res => {
            console.log(res);
            getList();
        })
            .catch(err => console.log(err));
    }

    const deleteFromFav = (id) => {
        axios.delete(`https://localhost:5001/api/favoritetvshows/${id}`)
            .then(res => {
                console.log(res);
                getList();
            })
            .catch(err => console.log(err));
    }
    
    const EditTvShow = (id) => {

        history.push(`/edit-tvshow/${id}`, { id: id })
    }

    const redirect = (num) => {
        if(num === 1){
            history.push("/add-new-tvshow");
        } else {
            history.push("/search-tvshow-outside");
        }
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
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {tvShowList.map((tvShow, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{tvShow.title}</td>
                        <td className="align-middle">{tvShow.date}</td>
                        <td className="align-middle">{tvShow.summary}</td>
                        <td className="align-middle">{tvShow.rating}</td>
                        <td className="align-middle"><img src={tvShow.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            {user?
                                <div>
                                    <button onClick={()=> EditTvShow(tvShow.id)} className="btn btn-dark">Edit</button>
                                    {tvShow.favoriteTvShow != null
                                        ? <button onClick={()=> deleteFromFav(tvShow.favoriteTvShow.id)} className="btn btn-danger">Delete</button>
                                        : <button onClick={()=> addToFav(tvShow.id)} className="btn btn-primary">Add</button>
                                    }
                                </div>  :
                                null
                            }
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderTvShowsTable(tvShowList);

    return (
        <div>
            <h1 id="tabelLabel" >TV Shows List</h1>
            <button onClick={()=>redirect(1)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px",}}>Add New TV Show</button>
            <button onClick={()=>redirect(2)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px", marginLeft: "15px"}}>Search from Outside</button>
            {contents}
        </div>
    );
}