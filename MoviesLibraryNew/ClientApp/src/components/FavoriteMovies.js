import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function FavoriteMovies(props){

    const [favMovieList, setFavMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    // const user = props.user.id? props.user: null;
    const user = props.user.id? props.user: null;
    
    // console.log(user.id)

    useEffect(() => {
        getList()
    }, []);

    const getList = async () => {
        if (user !== null){
        axios.get(`https://localhost:5001/api/favoritemovies/${user.id}`, {
            data: {
                userId: user.id
            }
        })
            .then(res => {
                const list = res.data;
                setFavMovieList(list);
                setLoading(false);
                console.log(res.data)
            }).catch(err => {
            console.log("Error")
        })
        }
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

    const renderFavMoviesTable = (favMovieList) => {
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
                {favMovieList.map((favMovie, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{favMovie.title}</td>
                        <td className="align-middle">{favMovie.date}</td>
                        <td className="align-middle">{favMovie.summary}</td>
                        <td className="align-middle">{favMovie.rating}</td>
                        <td className="align-middle"><img src={favMovie.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={() => deleteFromFav(favMovie.favoriteMovie[0].id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
    
    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderFavMoviesTable(favMovieList);

    return (
        <div>
            <h1 id="tabelLabel" >Favorite Movies List</h1>
            {/*<p>This component demonstrates fetching data from the server.</p>*/}
            {contents}
        </div>
    );
    
    
}