import React, { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';

export default function Facebooklogin() {
    const [data, setData] = useState({})

    const responseFacebook = (response) => {
      setData({ name: response.name, email: response.email, picture: response.picture.data.url, token: response.accessToken })
    }
    useEffect(() => {
      if (data.token) 
      {
        localStorage.setItem("token", data.token)
        localStorage.setItem("name", data.name)
        localStorage.setItem("email", data.email)
        localStorage.setItem("picture", data.picture)
      }
    },[data])
    return (
        <div>
            <h4>Login please..</h4>
            <FacebookLogin
              appId="485706339362929"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook} />
        </div>
    )
}
