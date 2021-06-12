import React, { Component, useState, useEffect } from 'react'
import FacebookLogin from 'react-facebook-login';
import App from '../App'

export default function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [picture, setPicture] = useState('')
    const [token, setToken] = useState('')

    const responseFacebook = (response) => {
        setName(response.name)
        setEmail(response.email)
        setPicture(response.picture.data.url)
        setToken(response.accessToken)
    }


    return (
        <center>
            {token ? <App></App> :
                <div class="main">
                    <p class="sign" align="center">Welcome</p>
                    <h2>Login using Facebook</h2>
                    <FacebookLogin
                        appId="337869971034903"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook} /></div>}
        </center>

    )
}


