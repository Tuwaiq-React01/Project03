import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login';

export default function FacebookLoginPage() {
    console.log("IM IN");
    const [username, setUsername] = useState(0);
    const [email, setEmail] = useState(0);
    const [avatar, setAvatar] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);


    return loggedIn?(
    <div style={{textAlign: "center", paddingTop: "10%"}}> 
        <h5>Welcome {username}</h5>
        <h5>Email: {email}</h5>
        <img src={avatar}/>
    </div>
    ):(
          
          <div style={{position: "absolute", left: "40%", top: "35%"}}><FacebookLogin 
          appId="1743921975796236"
          autoLoad={true}
          fields="name,email,picture"
          callback={
              (response) => {
            console.log(response);
            setUsername(response.name)
            setEmail(response.email)
            setAvatar(response.picture.data.url)
            setLoggedIn(true)
          }
        }
        />
        </div>
        
      );
}
