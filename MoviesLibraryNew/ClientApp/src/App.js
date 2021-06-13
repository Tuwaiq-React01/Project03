import React, {Component, useEffect, useState} from 'react';
import { Route } from 'react-router-dom';
import  Layout  from './components/Layout';
import Home from './components/Home';
// import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';

import './custom.css'
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import FavoriteMovies from "./components/FavoriteMovies";
import FavoriteTvShows from "./components/FavoriteTvShows";
import AddNewMovie from "./components/AddNewMovie";
import SearchMovieOutside from "./components/SearchMovieOutside";
import AddNewTvShow from "./components/AddNewTvShow";
import SearchTvShowOutside from "./components/SearchTvShowOutside";
import EditMovie from "./components/EditMovie";
import EditTvShow from "./components/EditTvShow";

export default function App(){
    // static displayName = App.name;

    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        if (typeof user.googleId !== 'undefined'){
            localStorage.setItem("id", user.id);
            localStorage.setItem("googleId", user.googleId);
            localStorage.setItem("name", user.name);
            localStorage.setItem("email", user.email);
            localStorage.setItem("image", user.image);
            console.log("mount -----")
        }
        else if (localStorage.getItem("googleId")){
            setUser({
                id: localStorage.getItem("id"),
                name: localStorage.getItem("name"),
                email: localStorage.getItem("email"),
                image: localStorage.getItem("image"),
                googleId: localStorage.getItem("googleId")
            })
            console.log("mount +++++")
        }
        console.log("mount")
        return () => {

        }
    }, [user])

    const onLogin = (res) => {
        console.log("Home", res)
        setUser({
            id: res.id,
            name: res.name,
            email: res.email,
            image: res.image,
            googleId: res.googleId
        })
        setLoggedIn(true)
    }
    const onLogout = (res) => {
        console.log("logout", res)
        localStorage.clear();
        setUser({})
        // setLoggedIn(false)
    }
    return (
        <Layout onLogin = {onLogin} onLogout = {onLogout} user={user}>
            <Route exact path='/' component={Home} />
            {/*<Route path='/fetch-data' component={FetchData} />*/}
            <Route path='/movies' component={() => <Movies user={user} />}/>
            <Route path='/favorite-movies' component={() => <FavoriteMovies user={user} />} />
            <Route path='/tv-shows' component={() => <TvShows  user={user} />} />
            <Route path='/favorite-tv-shows' component={() => <FavoriteTvShows  user={user} />} />
            <Route path='/add-new-movie' component={AddNewMovie} />
            <Route path='/edit-movie' component={EditMovie} />
            <Route path='/search-movie-outside' component={SearchMovieOutside} />
            <Route path='/add-new-tvshow' component={AddNewTvShow} />
            <Route path='/edit-tvshow' component={EditTvShow} />
            <Route path='/search-tvshow-outside' component={SearchTvShowOutside} />
        </Layout>

    );

}
