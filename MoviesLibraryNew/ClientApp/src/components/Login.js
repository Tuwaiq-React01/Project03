import React from 'react'
import { useEffect } from 'react';

import GoogleLogin from 'react-google-login';
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function Login(props) {
    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    const history = useHistory();

    const responseGoogle = (response) => {
        console.log(response);
        
        
        axios.post("https://localhost:5001/api/users", {
            googleId: response.profileObj.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email,
            image: response.profileObj.imageUrl,
        }).then(res => {
            console.log(res);
            props.onLoggin(res.data[0]);
            history.push("/");
        }).catch(err => console.log(err));
    }
    
    
    return (
        <div>
            <GoogleLogin
                clientId="781893650775-taivsplge74qihtj2vsqd8pe9ld26mmd.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                
            />
        </div>
    )
}
