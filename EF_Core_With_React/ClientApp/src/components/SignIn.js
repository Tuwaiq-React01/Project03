import React,{useState, useEffect} from 'react'
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignIn() {

    const [myname,setMyname]=useState("");
    const [myemail, setMyemail]=useState("");
    const [mypicture,setMypicture]=useState("");
    const [id, setId] =useState("");

    useEffect(()=>{
      if(localStorage.getItem("id")){
        setMyname(localStorage.getItem("name"));
        setMyemail(localStorage.getItem("email"));
        setMypicture(localStorage.getItem("picture"));
        setId(localStorage.getItem("id"));
      }
    },[])


    const responseFacebook = (response) => {
    setMyname(response.name)
    setMyemail(response.email);
    setMypicture(response.picture.data.url);
    setId(response.id.substring(0,9)); //response.id
    // console.log(response) // always check me!
    }

    const SigningIn= ()=>{
      localStorage.setItem("name",myname)
      localStorage.setItem("email",myemail)
      localStorage.setItem("picture",mypicture)
      localStorage.setItem("id",id)
      axios({
        method: 'post',
        url: `https://localhost:5001/User/SignIn?id=${id}&email=${myemail}&img=${mypicture}&name=${myname}`,
        // data:{d: id,
        //   email: myemail,
        //   image: mypicture,
        //   name: myname}
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
          console.log(err)
      })
    }
    return (
        <center style={{color:"white"}}>
                      <br></br>
            <br></br>
        {id
        ?
        // <div>
          <div className="board">

            <h4> Welcome {myname}</h4>
            <h4> You are signing in with {myemail}</h4>
            <img src={mypicture} alt=""></img>
            <Link to="/RGames"> 
            <br/>
            <br/>
            <br/>
            <h5 onClick={SigningIn}>Continue</h5></Link>
          </div>
        :<div className="board">
            <h2>Login with Facebook</h2>
            <FacebookLogin
            appId="490316002077284"
            autoLoad={false}// to autoload the sign in when reftesh the page.
            fields="name,email,picture"
            callback={responseFacebook} />
        </div>
        }
        </center>
    )
}
