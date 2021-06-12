import React, { useState, useEffect } from 'react';
import { Route } from 'react-router';
import Layout  from './components/Layout';
import Home from './components/Home';
import axios from "axios"
import './custom.css'
import FacebookLogin from 'react-facebook-login';


const App = () => {
  const [isD, setIsD] = useState(() => false);
  const [name, setName] = useState(()=>"")
  const [email, setEmail] = useState(()=>"")
  const [pic, setPic] = useState(()=>"")
  const [token, setToken] = useState(()=>"")

  
  const D2L = () => {
    setIsD((prev) => !prev)
  }

  const responseFacebook = (response) => {
    console.log(response);
    setName(prev => prev = response.name)
    setEmail(prev => prev = response.email)
    setPic(prev => prev = response.picture.data.url)
    setToken(prev => prev = response.accessToken)
  }

  return (
    <Layout D2L={()=> D2L()}>
      {!token? (
      <FacebookLogin
        appId="811280352861504"
        autoLoad={true}
        fields="name,email,picture"
        //onClick={componentClicked}
        callback={responseFacebook} />)
        :(<>
      <Route exact path='/' component={Home} />
      {/* <Route path='/counter' component={Counter} />
      <Route path='/fetch-data' component={FetchData} /> */}
      </>)}
    </Layout>
  );
}
export default App;