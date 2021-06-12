import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Top from './pages/Top';
import Reviews from './pages/reviews/Show';
import CreateReview from './pages/reviews/Create';
import EditReview from './pages/reviews/Edit';
import './custom.css';
import ReactFacebookLogin from 'react-facebook-login';

function App() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setName(localStorage.getItem("name"));
            setEmail(localStorage.getItem("email"));
            setPicture(localStorage.getItem("picture"));
            setToken(localStorage.getItem("token"));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("picture", picture);
    }, [token]);

    const responseFacebook = (response) => {
        if (response.status !== "unknown") {
            setName(response.name);
            setEmail(response.email);
            setPicture(response.picture.data.url);
            setToken(response.accessToken);
        }
        else {
            console.log("you are not logged in");
        }
    }

    return (
        <Layout>
        {
            localStorage.getItem("token") ?
            <>
            <Route exact path='/' component={Home} />
            <Route path='/top-movies' component={Top}/>
            <Route path='/reviews' component={Reviews} />
            <Route path='/create-review' component={CreateReview} />
            <Route path='/edit-review' component={EditReview} />
            </>
            :
            <ReactFacebookLogin
                appId="3889904517725278"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        }
        </Layout>
    )
}

export default App;
