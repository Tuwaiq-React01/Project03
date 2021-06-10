import React, { useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login';

export default function UserInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pic, setPic] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        if(localStorage.getItem("token")){
            setName(localStorage.getItem("name"))
            setEmail(localStorage.getItem("email"))
            setPic(localStorage.getItem("pic"))
            setToken(localStorage.getItem("token"))
        }
    }, [])
    const responseFacebook = (response) => {
        if (response.status !== "unknown") {
            setName(response.name)
            setEmail(response.email)
            setPic(response.picture.data.url)
            setToken(response.accessToken)
            localStorage.setItem("name",response.name)
            localStorage.setItem("email",response.email)
            localStorage.setItem("pic",response.picture.data.url)
            console.log(response.picture.data.url);
            localStorage.setItem("token",response.accessToken)
        }
    }
    return (
        <div className="mx-auto mt-6 ">
            {token ?
                <div>         
                    <div className="circle-img" style={{backgroundImage: `url(${pic})`}}></div>
                    <h1 className="text-2xl font-bold text-center my-4 ">{name}</h1>
                    <h4 className="text-center text-gray-500 text-sm mb-4 ">{email}</h4>
                </div>
                : <FacebookLogin
                    appId="931621370731651"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} />}
           
        </div>
    )
}
 {/*<h2 className="mt-4 font-semibold text-center">Mood</h2>
         <div className="flex gap-4 mt-6">
            <div className="px-1 bg-purple-200 rounded-full border border-transparent text-center text-4xl shadow-lg">😃</div>
            <div className="px-1 bg-indigo-200 rounded-full border border-transparent text-center text-4xl shadow-lg">😎</div>
            <div className="px-1 bg-pink-200 rounded-full border border-transparent text-center text-4xl shadow-lg">🥳</div>
        </div> */}