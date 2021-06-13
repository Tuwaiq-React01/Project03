import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function Movies(props){

    const [movieList, setMovieList] = useState([]);
    const [FavMovieList, setFavMovieList] = useState([]);
    // const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = props.user.id? props.user: null;
    console.log(user)
    
    const history = useHistory();

    useEffect(() => {
        getList()
        // getFav()
        // asd()
        
    }, []);
    
    

    const getList = async () => {
        axios.get(`https://localhost:5001/api/movies`)
            .then(res => {
                const list = res.data;
                setMovieList(list);
                setLoading(false)
                // console.log(res.data[2].favoriteMovie[0].userId)
            }).catch(err => {
            console.log("Error")
        })
    }
    
    // const getFav = async () => {
    //     if (user !== null){
    //         axios.get(`https://localhost:5001/api/favoritemovies/${user.id}`)
    //             .then(res => {
    //                 const list = res.data;
    //                 setFavMovieList(list);
    //                 for (const movie in movieList) {
    //                     if (movie.favoriteMovie != null)
    //                         for (const favMov in FavMovieList) {
    //                             if ()
    //                         }
    //                 }
    //                 console.log(res.data)
    //
    //             }).catch(err => {
    //             console.log("Error")
    //         })
    //     }
    // }
    
    
    
    const addToFav = (id) => {
        axios.post("https://localhost:5001/api/favoritemovies", {
            movieId: id,
            userId: user.id
        }).then(res => {
            console.log(res);
            getList();
        }).catch(err => console.log(err));
    }
    
    const deleteFromFav = (id) => {
        axios.delete(`https://localhost:5001/api/favoritemovies/${id}`, {
            data: {
                userId: user.id 
            }
        })
            .then(res => {
                console.log(res);
                getList();
            })
            .catch(err => console.log(err));
    }
    const EditMovie = (id) => {
        // axios.put(`https://localhost:5001/api/favoritemovies/${id}`, {
        //    
        // })
        //     .then(res => {
        //         console.log(res);
        //         getList();
        //     })
        //     .catch(err => console.log(err));
        history.push(`/edit-movie/${id}`, { id: id })
    }

    const redirect = (num) => {
        if(num === 1){
           history.push("/add-new-movie");
        } else {
            history.push("/search-movie-outside");
        }
    }

  const renderMoviesTable = (movieList) => {
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
                {movieList.map((movie, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{movie.title}</td>
                        <td className="align-middle">{movie.date}</td>
                        <td className="align-middle">{movie.summary}</td>
                        <td className="align-middle">{movie.rating}</td>
                        <td className="align-middle"><img src={movie.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            {user?
                                <div>
                                        <button onClick={() => EditMovie(movie.id)} className="btn btn-dark">Edit</button>
                                    {movie.favoriteMovie != null && movie.favoriteMovie[0].userId == user.id
                                        ? <button onClick={()=> deleteFromFav(movie.favoriteMovie[0].id)} className="btn btn-danger">Delete</button>
                                        : <button onClick={()=> addToFav(movie.id)} className="btn btn-primary">Add</button>
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
    
    let contents = false
        ? <p><em>Loading...</em></p>
        : renderMoviesTable(movieList);

    return (
        <div>
            <h1 id="tabelLabel" style={{textAlign: "center"}}>Movies List</h1>
            <button onClick={()=>redirect(1)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px",}}>Add New Movie</button>
            <button onClick={()=>redirect(2)} className="btn btn-success " style={{marginTop: "30px", marginBottom: "10px", marginLeft: "15px"}}>Search from Outside</button>
            {contents}
        </div>
    );
}