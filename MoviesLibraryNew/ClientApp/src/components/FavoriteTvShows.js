import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function FavoriteTvShows(props){

    const [favTvShowList, setFavTvShowList] = useState([]);
    const [loading, setLoading] = useState(true);

    const user = props.user.id? props.user: null;

    useEffect(() => {
        getList()
    }, []);

    const getList = async () => {
        axios.get(`https://localhost:5001/api/favoritetvshows/${user.id}`, {
            data: {
                userId: user.id
            }
        })
            .then(res => {
                const list = res.data;
                setFavTvShowList(list);
                setLoading(false);
            }).catch(err => {
            console.log("Error")
        })
    }

    const deleteFromFav = (id) => {
        axios.delete(`https://localhost:5001/api/favoritetvshows/${id}`, {
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

    const renderfavTvShowsTable = (favTvShowsList) => {
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
                {favTvShowsList.map((favTvShow, index) =>
                    <tr key={index+1}>
                        <td className="align-middle">{index+1}</td>
                        <td className="align-middle">{favTvShow.title}</td>
                        <td className="align-middle">{favTvShow.date}</td>
                        <td className="align-middle">{favTvShow.summary}</td>
                        <td className="align-middle">{favTvShow.rating}</td>
                        <td className="align-middle"><img src={favTvShow.poster} height="200px" alt="not supported"/></td>
                        <td className="align-middle">
                            <button onClick={()=> deleteFromFav(favTvShow.favoriteTvShow[0].id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderfavTvShowsTable(favTvShowList);

    return (
        <div>
            <h1 id="tabelLabel" >Favorite TV Shows List</h1>
            {/*<p>This component demonstrates fetching data from the server.</p>*/}
            {contents}
        </div>
    );
}