import React from 'react'
import { useEffect } from 'react';

import { GoogleLogout } from 'react-google-login';
import {useHistory} from "react-router-dom";

export default function Logout(props) {
    useEffect(() => {

        return () => {

        }
    }, [])


    const history = useHistory();
    
    
    const onLogoutSec = (response) => {
        console.log(response);
        props.onLogout();
        history.push("/");
    }
    const onLogoutFail = (response) => {
        console.log(response);
        // props.onLogout();
    }

    return (
        <div>
            <GoogleLogout
                clientId="781893650775-taivsplge74qihtj2vsqd8pe9ld26mmd.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={onLogoutSec}
                onFailure={onLogoutFail}
            >
            </GoogleLogout>
        </div>
    )
}
