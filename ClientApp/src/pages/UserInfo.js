import React, {useState, useEffect} from 'react'
import User from '../components/User'
import FacebookLogin from 'react-facebook-login'

export default function UserInfo(props) {
    const [isAutenticated, setIsAutenticated] = useState(false);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if(localStorage.getItem('isAutenticated')) {
            setIsAutenticated(true);
            setEmail(localStorage.getItem('email'));
            setName(localStorage.getItem('name'));
            setImageUrl(localStorage.getItem('imageUrl'));
        }
    }, [])

    const responseFacebook = (response) => {
        console.log(response);

        setEmail(response.email);
        localStorage.setItem('email', response.email);

        setName(response.name);
        localStorage.setItem('name', response.name)

        setImageUrl(response.picture.data.url);
        localStorage.setItem('imageUrl', response.picture.data.url)
        
        setIsAutenticated(true);
        localStorage.setItem('isAutenticated', true);
    }

    const logout = () => {
        localStorage.clear()

        setIsAutenticated(false);
        setEmail(null);
        setName(null);
        setImageUrl(null);
    }

    return (
        <div>
            {
            isAutenticated
            ?
            <div>
                <User email={email} name={name} imageUrl={imageUrl}/>
                <div className="text-center mt-5 ">
                    <button onClick={ logout } type="button" className="btn btn-danger btn-lg mb-3 mt-n4">Log Out</button>
                </div>
            </div>
            :
            <div>
                <h1>Please log in to view your info</h1>

                <FacebookLogin
                    appId="476807630274672"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
            </div> 
            }
        </div>
    )
}